import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-bid-request-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bid-request-form.component.html',
  styleUrls: ['./bid-request-form.component.scss']
})
export class BidRequestFormComponent {
  @Input() heading = 'Request a bid';
  @Input() intro = 'Send company details and plans. We reply from deezcabnuts.sales@gmail.com.';

  readonly salesEmail = 'deezcabnuts.sales@gmail.com';
  readonly projectTypes = [
    { value: 'Tract homes', label: 'Tract homes' },
    { value: 'Apartments', label: 'Apartments' },
    { value: 'Hotel', label: 'Hotel' },
    { value: 'Single home', label: 'Single home' }
  ];
  readonly fulfillmentOptions = [
    { value: 'Supply only', label: 'Supply only (build, or build and deliver)' },
    { value: 'Build and install', label: 'Build and install' }
  ];

  selectedFile: File | null = null;
  fileError = '';
  submitError = '';
  submitted = false;
  sending = false;

  readonly form = this.fb.group({
    company: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    projectType: ['', Validators.required],
    city: ['', Validators.required],
    fulfillment: ['', Validators.required],
    plansNotes: [''],
    website: ['']
  });

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  get mailtoHref(): string {
    const subject = encodeURIComponent('Bid request from deezcabnuts.com');
    const body = encodeURIComponent(this.buildPlainTextBody());
    return `mailto:${this.salesEmail}?subject=${subject}&body=${body}`;
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.fileError = '';
    this.selectedFile = null;

    if (!file) {
      return;
    }

    const maxBytes = 5 * 1024 * 1024;
    const allowed = /\.(pdf|png|jpe?g|zip|dwg|dxf)$/i;
    if (!allowed.test(file.name)) {
      this.fileError = 'Use a PDF, photo, ZIP, DWG, or DXF (5 MB or less). Or describe the plans below.';
      input.value = '';
      return;
    }
    if (file.size > maxBytes) {
      this.fileError = 'That file is over 5 MB. Attach a smaller file or describe the plans below.';
      input.value = '';
      return;
    }

    this.selectedFile = file;
  }

  async onSubmit() {
    this.submitError = '';
    this.form.markAllAsTouched();

    if (this.form.invalid || this.form.value.website) {
      return;
    }

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.sending = true;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${this.salesEmail}`, {
        method: 'POST',
        body: this.buildFormData(),
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Request failed (${response.status})`);
      }

      this.submitted = true;
      this.form.reset();
      this.selectedFile = null;
    } catch {
      this.submitError = `We could not send that from the site. Email ${this.salesEmail} instead, or use the link below.`;
    } finally {
      this.sending = false;
    }
  }

  private buildFormData(): FormData {
    const data = new FormData();
    const value = this.form.getRawValue();

    data.append('Company', value.company ?? '');
    data.append('Name', value.name ?? '');
    data.append('email', value.email ?? '');
    data.append('_replyto', value.email ?? '');
    data.append('Project type', value.projectType ?? '');
    data.append('City', value.city ?? '');
    data.append('Supply or install', value.fulfillment ?? '');
    data.append('Plans / notes', value.plansNotes ?? '');
    data.append('_subject', 'Bid request from deezcabnuts.com');
    data.append('_template', 'table');
    data.append('_captcha', 'false');

    if (this.selectedFile) {
      data.append('attachment', this.selectedFile, this.selectedFile.name);
    }

    return data;
  }

  private buildPlainTextBody(): string {
    const value = this.form.getRawValue();
    return [
      `Company: ${value.company || ''}`,
      `Name: ${value.name || ''}`,
      `Email: ${value.email || ''}`,
      `Project type: ${value.projectType || ''}`,
      `City: ${value.city || ''}`,
      `Supply or install: ${value.fulfillment || ''}`,
      `Plans / notes: ${value.plansNotes || ''}`
    ].join('\n');
  }
}
