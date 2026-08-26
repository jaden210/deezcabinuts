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
  selector: 'app-bloomington-hills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bloomington-hills.component.html',
  styleUrl: './bloomington-hills.component.scss'
})
export class BloomingtonHillsComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.title.setTitle('Custom Cabinets Bloomington Hills UT | DeezCabinuts | Kitchen & Bathroom Cabinetry');

    this.meta.updateTag({
      name: 'description',
      content: 'Professional custom cabinetry services in Bloomington Hills, UT. Expert kitchen cabinets, bathroom vanities, closets & office furniture. Free consultations. Call (801) 807-9232.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'custom cabinets Bloomington Hills, kitchen cabinets Bloomington Hills UT, bathroom vanities Bloomington Hills, custom closets Bloomington Hills, office furniture Bloomington Hills, cabinet makers Bloomington Hills, woodworking Bloomington Hills'
    });

    this.meta.updateTag({ property: 'og:title', content: 'Custom Cabinets Bloomington Hills UT | DeezCabinuts' });
    this.meta.updateTag({ property: 'og:description', content: 'Expert custom cabinetry in Bloomington Hills, UT. Kitchen cabinets, bathroom vanities, closets & office furniture. Free consultations available.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://deezcabnuts.com/locations/bloomington-hills' });
    this.meta.updateTag({ property: 'og:image', content: 'https://deezcabnuts.com/assets/logo.svg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Cabinets Bloomington Hills UT | DeezCabinuts' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Expert custom cabinetry in Bloomington Hills, UT. Kitchen cabinets, bathroom vanities, closets & office furniture.' });

    if (isPlatformBrowser(this.platformId)) {
      this.addStructuredData();
      this.addFAQStructuredData();
    }
  }

  private addStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "DeezCabinuts - Bloomington Hills",
      "description": "Custom cabinetry services in Bloomington Hills, Utah specializing in kitchen cabinets, bathroom vanities, custom closets, and office furniture",
      "url": "https://deezcabnuts.com/locations/bloomington-hills",
      "telephone": "+1-801-807-9232",
      "email": "info@deezcabnuts.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bloomington Hills",
        "addressRegion": "UT",
        "addressCountry": "US",
        "postalCode": "84790"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "37.0665",
        "longitude": "-113.5828"
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
        "name": "Bloomington Hills",
        "addressRegion": "UT"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "32"
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
      description: 'Custom kitchen cabinets designed for your Bloomington Hills home',
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
      name: 'Amanda Christensen',
      location: 'Bloomington Hills',
      rating: 5,
      text: 'DeezCabinuts created stunning custom cabinets for our Bloomington Hills home. The craftsmanship and attention to detail is outstanding in Southern Utah.',
      date: '2024-08-25'
    },
    {
      name: 'Robert Larsen',
      location: 'Bloomington Hills',
      rating: 5,
      text: 'From consultation to installation, the entire process was professional and seamless. Our bathroom vanities are absolutely beautiful.',
      date: '2024-08-07'
    },
    {
      name: 'Michelle Anderson',
      location: 'Bloomington Hills',
      rating: 5,
      text: 'The custom closet system transformed our master bedroom. Excellent quality and outstanding customer service throughout the project.',
      date: '2024-07-16'
    }
  ];

  faqs: FAQ[] = [
    {
      question: 'Do you serve Bloomington Hills and the surrounding area?',
      answer: 'Yes, we proudly serve Bloomington Hills and the surrounding Washington County communities including St. George, Hurricane, and other Southern Utah locations. We provide custom cabinetry solutions throughout the region.'
    },
    {
      question: 'How long does a typical cabinet project take?',
      answer: 'Project timelines vary depending on the scope and complexity. A standard kitchen remodel typically takes 2-4 weeks from design to installation. We\'ll provide a detailed timeline during your free consultation.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Absolutely! We offer free, no-obligation consultations where we discuss your project needs, take measurements, and provide design recommendations tailored to your Bloomington Hills home.'
    },
    {
      question: 'What types of materials do you use?',
      answer: 'We use high-quality materials including solid wood, plywood, and premium finishes. We work with various wood species and offer multiple finish options to match your style and budget.'
    },
    {
      question: 'Are your cabinets custom-built?',
      answer: 'Yes, every cabinet we create is custom-built to fit your specific space and design preferences. No cookie-cutter solutions - we design and build cabinets that perfectly suit your Bloomington Hills home.'
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