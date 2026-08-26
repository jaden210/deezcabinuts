import { TestBed } from '@angular/core/testing';
import { BidRequestFormComponent } from './bid-request-form.component';

describe('BidRequestFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidRequestFormComponent]
    }).compileComponents();
  });

  it('should require company, name, project type, city, and supply or install', () => {
    const fixture = TestBed.createComponent(BidRequestFormComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.form.valid).toBeFalse();
    component.form.patchValue({
      company: 'Example Homes',
      name: 'Jordan Lee',
      email: 'jordan@example.com',
      projectType: 'Tract homes',
      city: 'Cedar City',
      fulfillment: 'Supply only'
    });
    expect(component.form.valid).toBeTrue();
  });

  it('should address sales email', () => {
    const fixture = TestBed.createComponent(BidRequestFormComponent);
    expect(fixture.componentInstance.salesEmail).toBe('deezcabnuts.sales@gmail.com');
    expect(fixture.componentInstance.mailtoHref).toContain('deezcabnuts.sales@gmail.com');
  });
});
