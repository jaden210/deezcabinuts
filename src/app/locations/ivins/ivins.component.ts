import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-ivins',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ivins.component.html',
  styleUrl: './ivins.component.scss'
})
export class IvinsComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.title.setTitle('Custom Cabinets Ivins UT | DeezCabinuts | Kitchen & Bathroom Cabinetry');

    this.meta.updateTag({
      name: 'description',
      content: 'Professional custom cabinetry services in Ivins, UT. Expert kitchen cabinets, bathroom vanities, closets & office furniture. Free consultations. Call (801) 807-9232.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'custom cabinets Ivins, kitchen cabinets Ivins UT, bathroom vanities Ivins, custom closets Ivins, office furniture Ivins, cabinet makers Ivins, woodworking Ivins'
    });

    this.meta.updateTag({ property: 'og:title', content: 'Custom Cabinets Ivins UT | DeezCabinuts' });
    this.meta.updateTag({ property: 'og:description', content: 'Expert custom cabinetry in Ivins, UT. Kitchen cabinets, bathroom vanities, closets & office furniture. Free consultations available.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://deezcabnuts.com/locations/ivins' });
    this.meta.updateTag({ property: 'og:image', content: 'https://deezcabnuts.com/assets/logo.svg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Cabinets Ivins UT | DeezCabinuts' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Expert custom cabinetry in Ivins, UT. Kitchen cabinets, bathroom vanities, closets & office furniture.' });

    if (isPlatformBrowser(this.platformId)) {
      this.addStructuredData();
      this.addFAQStructuredData();
    }
  }

  private addStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "DeezCabinuts - Ivins",
      "description": "Custom cabinetry services in Ivins, Utah specializing in kitchen cabinets, bathroom vanities, custom closets, and office furniture",
      "url": "https://deezcabnuts.com/locations/ivins",
      "telephone": "+1-801-807-9232",
      "email": "info@deezcabnuts.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ivins",
        "addressRegion": "UT",
        "addressCountry": "US",
        "postalCode": "84738"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "37.1686",
        "longitude": "-113.6794"
      },
      "openingHours": "Mo-Fr 08:00-17:00",
      "priceRange": "$$",
      "serviceType": [
        "Custom Kitchen Cabinets",
        "Bathroom Vanities",
        "Custom Closets",
        "Office Furniture",
        "Home Renovation"
      ],
      "areaServed": {
        "@type": "City",
        "name": "Ivins",
        "addressRegion": "UT"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "65"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  private addFAQStructuredData() {
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": this.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqStructuredData);
    document.head.appendChild(script);
  }

  services: Service[] = [
    {
      title: 'Kitchen Cabinets',
      description: 'Custom kitchen cabinets designed for your Ivins home',
      icon: 'kitchen',
      link: '/services/kitchen-cabinets'
    },
    {
      title: 'Bathroom Vanities',
      description: 'Elegant bathroom vanities and storage solutions',
      icon: 'bathtub',
      link: '/services/bathroom-cabinets'
    },
    {
      title: 'Custom Closets',
      description: 'Walk-in closets and wardrobe solutions',
      icon: 'checkroom',
      link: '/services/walk-in-closet-systems'
    },
    {
      title: 'Office Furniture',
      description: 'Custom office cabinets and workspace solutions',
      icon: 'desk',
      link: '/services/home-office-cabinets'
    }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Amanda Patterson',
      location: 'Ivins',
      rating: 5,
      text: 'DeezCabinuts created stunning custom cabinets for our Ivins home. The craftsmanship and attention to detail is outstanding in Southern Utah.',
      date: '2024-09-08'
    },
    {
      name: 'Christopher Ward',
      location: 'Ivins',
      rating: 5,
      text: 'From consultation to installation, the entire process was professional and seamless. Our bathroom vanities are absolutely beautiful.',
      date: '2024-08-14'
    },
    {
      name: 'Michelle Torres',
      location: 'Ivins',
      rating: 5,
      text: 'The custom closet system transformed our master bedroom. Excellent quality and outstanding customer service throughout the project.',
      date: '2024-07-22'
    }
  ];

  faqs: FAQ[] = [
    {
      question: 'Do you serve Ivins and the surrounding area?',
      answer: 'Yes, we proudly serve Ivins and the surrounding Washington County communities including St. George, Washington, Hurricane, Santa Clara, and La Verkin. We provide custom cabinetry solutions throughout Southern Utah.'
    },
    {
      question: 'How long does a typical cabinet project take?',
      answer: 'Project timelines vary depending on the scope and complexity. A standard kitchen remodel typically takes 2-4 weeks from design to installation. We\'ll provide a detailed timeline during your free consultation.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Absolutely! We offer free, no-obligation consultations where we discuss your project needs, take measurements, and provide design recommendations tailored to your Ivins home.'
    },
    {
      question: 'What types of materials do you use?',
      answer: 'We use high-quality materials including solid wood, plywood, and premium finishes. We work with various wood species and offer multiple finish options to match your style and budget.'
    },
    {
      question: 'Are your cabinets custom-built?',
      answer: 'Yes, every cabinet we create is custom-built to fit your specific space and design preferences. No cookie-cutter solutions - we design and build cabinets that perfectly suit your Ivins home.'
    }
  ];

  trackByServiceTitle(index: number, service: Service): string {
    return service.title;
  }

  trackByFaqQuestion(index: number, faq: FAQ): string {
    return faq.question;
  }

  scrollToSection(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  toggleFaq(event: Event) {
    const button = event.currentTarget as HTMLButtonElement;
    const faqItem = button.closest('.faq-item') as HTMLElement;

    if (faqItem) {
      const isActive = faqItem.classList.contains('active');
      const ariaExpanded = !isActive;

      faqItem.classList.toggle('active');
      button.setAttribute('aria-expanded', ariaExpanded.toString());

      const icon = button.querySelector('.material-icons');
      if (icon) {
        icon.textContent = ariaExpanded ? 'expand_less' : 'expand_more';
      }
    }
  }
}
