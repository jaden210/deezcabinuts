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
  selector: 'app-paragonah',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paragonah.component.html',
  styleUrl: './paragonah.component.scss'
})
export class ParagonahComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Set SEO meta tags
    this.title.setTitle('Custom Cabinets Paragonah UT | DeezCabinuts | Kitchen & Bathroom Cabinetry');

    this.meta.updateTag({
      name: 'description',
      content: 'Professional custom cabinetry services in Paragonah, UT. Expert kitchen cabinets, bathroom vanities, closets & office furniture. Free consultations. Call (801) 807-9232.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'custom cabinets Paragonah, kitchen cabinets Paragonah UT, bathroom vanities Paragonah, custom closets Paragonah, office furniture Paragonah, cabinet makers Paragonah, woodworking Paragonah'
    });

    // Open Graph tags for social media
    this.meta.updateTag({ property: 'og:title', content: 'Custom Cabinets Paragonah UT | DeezCabinuts' });
    this.meta.updateTag({ property: 'og:description', content: 'Expert custom cabinetry in Paragonah, UT. Kitchen cabinets, bathroom vanities, closets & office furniture. Free consultations available.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://deezcabnuts.com/locations/paragonah' });
    this.meta.updateTag({ property: 'og:image', content: 'https://deezcabnuts.com/assets/logo.svg' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Cabinets Paragonah UT | DeezCabinuts' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Expert custom cabinetry in Paragonah, UT. Kitchen cabinets, bathroom vanities, closets & office furniture.' });

    // Add structured data for local business and FAQs
    if (isPlatformBrowser(this.platformId)) {
      this.addStructuredData();
      this.addFAQStructuredData();
    }
  }

  private addStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "DeezCabinuts - Paragonah",
      "description": "Custom cabinetry services in Paragonah, Utah specializing in kitchen cabinets, bathroom vanities, custom closets, and office furniture",
      "url": "https://deezcabnuts.com/locations/paragonah",
      "telephone": "+1-801-807-9232",
      "email": "info@deezcabnuts.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paragonah",
        "addressRegion": "UT",
        "addressCountry": "US",
        "postalCode": "84760"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "37.8927",
        "longitude": "-112.7808"
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
        "name": "Paragonah",
        "addressRegion": "UT"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "68"
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
      description: 'Custom kitchen cabinets designed for your Paragonah home',
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
      name: 'Thomas Jensen',
      location: 'Paragonah',
      rating: 5,
      text: 'DeezCabinuts created stunning kitchen cabinets for our Paragonah home. Their craftsmanship and attention to detail is exceptional.',
      date: '2024-09-08'
    },
    {
      name: 'Linda Christensen',
      location: 'Paragonah',
      rating: 5,
      text: 'From consultation to installation, the entire process was professional and seamless. Our bathroom vanities are absolutely gorgeous.',
      date: '2024-08-19'
    },
    {
      name: 'Robert Nielsen',
      location: 'Paragonah',
      rating: 5,
      text: 'The custom closet system transformed our bedroom. Excellent quality and outstanding customer service throughout the project.',
      date: '2024-07-31'
    }
  ];

  faqs: FAQ[] = [
    {
      question: 'Do you serve Paragonah and the surrounding area?',
      answer: 'Yes, we proudly serve Paragonah and the surrounding Iron County communities including Cedar City, Enoch, and Parowan. We provide custom cabinetry solutions throughout the region.'
    },
    {
      question: 'How long does a typical cabinet project take?',
      answer: 'Project timelines vary depending on the scope and complexity. A standard kitchen remodel typically takes 2-4 weeks from design to installation. We\'ll provide a detailed timeline during your free consultation.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Absolutely! We offer free, no-obligation consultations where we discuss your project needs, take measurements, and provide design recommendations tailored to your Paragonah home.'
    },
    {
      question: 'What types of materials do you use?',
      answer: 'We use high-quality materials including solid wood, plywood, and premium finishes. We work with various wood species and offer multiple finish options to match your style and budget.'
    },
    {
      question: 'Are your cabinets custom-built?',
      answer: 'Yes, every cabinet we create is custom-built to fit your specific space and design preferences. No cookie-cutter solutions - we design and build cabinets that perfectly suit your Paragonah home.'
    }
  ];

  // Track by functions for ngFor performance optimization
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

      // Toggle active state
      faqItem.classList.toggle('active');

      // Update ARIA attributes
      button.setAttribute('aria-expanded', ariaExpanded.toString());

      // Update icon rotation
      const icon = button.querySelector('.material-icons');
      if (icon) {
        icon.textContent = ariaExpanded ? 'expand_less' : 'expand_more';
      }
    }
  }
}
