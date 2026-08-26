import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent {
  
  sendText() {
    const phoneNumber = '8018079232';
    const message = encodeURIComponent("I'm looking for help with some cabinets. Here's what I'm looking for:");
    const textUrl = `sms:${phoneNumber}?body=${message}`;
    window.open(textUrl, '_blank');
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
