import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface BedroomFeature {
  title: string;
  description: string;
  icon: string;
}

interface BedroomStyle {
  name: string;
  description: string;
  features: string[];
  imageUrl?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-bedroom-cabinets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bedroom-cabinets.component.html',
  styleUrl: './bedroom-cabinets.component.scss'
})
export class BedroomCabinetsComponent implements OnInit {
  
  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {}

  ngOnInit() {
    this.setSEOTags();
  }

  private setSEOTags() {
    // Set page title
    this.title.setTitle('Custom Bedroom Cabinets | Built-in Storage & Furniture Solutions | Deez Cabinuts');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Transform your bedroom with custom built-in cabinets from Deez Cabinuts. Beautiful nightstands, dressers, entertainment centers, and storage solutions with elegant textured melamine finishes. Get your free consultation today!'
    });

    // Set additional SEO meta tags
    this.meta.updateTag({ name: 'keywords', content: 'custom bedroom cabinets, built-in bedroom storage, bedroom furniture, nightstand cabinets, bedroom dressers, master bedroom renovation' });
    this.meta.updateTag({ property: 'og:title', content: 'Custom Bedroom Cabinets | Built-in Storage & Furniture Solutions' });
    this.meta.updateTag({ property: 'og:description', content: 'Transform your bedroom with custom built-in cabinets from Deez Cabinuts. Beautiful nightstands, dressers, entertainment centers, and storage solutions with elegant textured melamine finishes.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Bedroom Cabinets | Built-in Storage & Furniture Solutions' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Transform your bedroom with custom built-in cabinets from Deez Cabinuts. Beautiful nightstands, dressers, entertainment centers, and storage solutions with elegant textured melamine finishes.' });
  }

  features: BedroomFeature[] = [
    {
      title: 'Seamless Integration',
      description: 'I design every bedroom cabinet to integrate perfectly with your existing architecture and décor, creating a cohesive, built-in appearance.',
      icon: ''
    },
    {
      title: 'Personalized Storage',
      description: 'Custom solutions tailored to your specific storage needs, from clothing and linens to personal items and bedroom accessories.',
      icon: ''
    },
    {
      title: 'Space Optimization',
      description: 'I maximize every inch of your bedroom space while maintaining comfortable movement and creating an open, relaxing atmosphere.',
      icon: ''
    },
    {
      title: 'Quality Construction',
      description: 'Built with premium materials and expert craftsmanship that ensures your bedroom cabinets remain beautiful and functional for years.',
      icon: ''
    },
    {
      title: 'Style Coordination',
      description: 'I personally ensure your new cabinets complement your bedroom style, whether modern, traditional, or transitional design.',
      icon: ''
    },
    {
      title: 'Multi-Functional Design',
      description: 'Smart storage solutions that serve multiple purposes, from nightstands with charging stations to entertainment centers with cable management.',
      icon: ''
    }
  ];

  bedroomStyles: BedroomStyle[] = [
    {
      name: 'Built-in Nightstand Systems',
      description: 'Custom nightstand cabinets with integrated lighting, charging stations, and personalized storage for bedside essentials.',
      features: [
        'Integrated USB and electrical outlets',
        'Soft-close drawers and doors',
        'LED lighting integration',
        'Wireless charging station options',
        'Hidden cable management systems'
      ]
    },
    {
      name: 'Custom Dresser & Armoire Solutions',
      description: 'Elegant built-in dressers and armoires that provide ample clothing storage while enhancing your bedroom aesthetics.',
      features: [
        'Full-extension drawer systems',
        'Jewelry and accessory organization',
        'Mirror integration options',
        'Adjustable shelving systems',
        'Cedar lining for delicate items'
      ]
    },
    {
      name: 'Entertainment & Media Centers',
      description: 'Sophisticated bedroom entertainment systems with concealed storage for electronics and media equipment.',
      features: [
        'TV mounting and cable management',
        'Component storage and ventilation',
        'Remote control organization',
        'Gaming system accommodation',
        'Streaming device integration'
      ]
    },
    {
      name: 'Window Seat & Storage Benches',
      description: 'Beautiful window seat cabinets and storage benches that provide seating while maximizing bedroom storage potential.',
      features: [
        'Comfortable seating with storage below',
        'Custom cushion coordination',
        'Reading nook creation',
        'Seasonal storage solutions',
        'Architectural feature enhancement'
      ]
    }
  ];

  materials = [
    {
      name: 'Solid Hardwood',
      description: 'Premium hardwood construction that brings natural warmth and timeless elegance to your bedroom environment.',
      benefits: ['Natural beauty and grain patterns', 'Long-lasting durability', 'Timeless bedroom appeal', 'Can be refinished over time', 'Perfect for traditional and transitional styles']
    },
    {
      name: 'Engineered Wood with Textured Melamine',
      description: 'Modern engineered materials with sophisticated textured melamine surfaces, ideal for contemporary bedroom designs with clean lines and easy maintenance.',
      benefits: ['Contemporary textured finishes', 'Easy cleaning and maintenance', 'Consistent appearance quality', 'Perfect for modern bedroom aesthetics', 'Excellent durability for daily use']
    }
  ];

  storageFeatures = [
    'Deep drawers for clothing and linens',
    'Adjustable shelving for varying item sizes',
    'Jewelry and accessory organization',
    'Hidden storage for valuables',
    'Bedding and pillow storage',
    'Seasonal clothing accommodation',
    'Electronic device charging stations',
    'Cable management and cord organization',
    'Mirror integration and lighting',
    'Personal item security features'
  ];

  finishOptions = [
    'Textured Wood Grain Melamine (Warm Oak, Walnut, Maple patterns for bedroom warmth)',
    'Textured Stone & Concrete Effects (Modern sophisticated bedroom looks)',
    'Textured Fabric & Linen Patterns (Soft, cozy bedroom textures)',
    'Smooth Solid Colors in calming hues (Soft White, Warm Gray, Sage Green)',
    'Ultra-Matte Finishes (Fingerprint resistant for daily bedroom use)',
    'Two-tone combinations for elegant bedroom contrast',
    'Custom textured melamine options for unique bedroom designs'
  ];

  faqs: FAQ[] = [
    {
      question: 'Can bedroom cabinets be designed to match my existing furniture?',
      answer: 'Absolutely! I work closely with you to ensure your new bedroom cabinets complement your existing furniture style, color palette, and room décor. I can match existing finishes or create coordinated designs that enhance your bedroom\'s overall aesthetic.'
    },
    {
      question: 'How do you handle electrical integration for nightstands and entertainment centers?',
      answer: 'I coordinate with electricians to integrate outlets, USB ports, and lighting into your bedroom cabinets. This includes planning for device charging, accent lighting, and entertainment system power needs while keeping all wiring hidden and organized.'
    },
    {
      question: 'What storage solutions work best for master bedrooms?',
      answer: 'For master bedrooms, I typically recommend a combination of built-in nightstands with charging stations, dresser systems with jewelry organization, and entertainment centers. The key is creating solutions that serve your daily routines while maintaining a peaceful, clutter-free environment.'
    },
    {
      question: 'Can bedroom cabinets include features for couples with different needs?',
      answer: 'Yes! I specialize in creating bedroom storage that accommodates different preferences and routines. This includes his and hers nightstand configurations, shared dresser systems with personalized organization, and storage solutions that work for both partners.'
    },
    {
      question: 'How do you ensure bedroom cabinets don\'t overwhelm smaller spaces?',
      answer: 'I use several techniques including wall-mounted solutions, light colors and finishes, strategic use of mirrors, and designs that maintain visual flow. The goal is to maximize storage while keeping your bedroom feeling open and relaxing.'
    },
    {
      question: 'What\'s the typical timeline for a bedroom cabinet project?',
      answer: 'Most bedroom cabinet projects take 2-4 weeks depending on complexity and the number of pieces involved. This includes design consultation, manufacturing, and installation. I work efficiently to minimize disruption to your daily routines and sleeping arrangements.'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Bedroom Assessment',
      description: 'I start by understanding your bedroom layout, storage needs, and daily routines. We\'ll discuss your style preferences and I\'ll provide personalized recommendations for optimal bedroom organization.'
    },
    {
      step: 2,
      title: 'Design & Space Planning',
      description: 'I create detailed plans that integrate seamlessly with your bedroom architecture and existing furniture. You\'ll receive 3D renderings to visualize your transformed bedroom space.'
    },
    {
      step: 3,
      title: 'Style & Material Selection',
      description: 'Choose from my curated selection of bedroom-appropriate materials and elegant finishes. I\'ll guide you to create the perfect combination for your bedroom\'s aesthetic and functionality.'
    },
    {
      step: 4,
      title: 'Precision Manufacturing',
      description: 'Your bedroom cabinets are custom-built by me in my workshop with meticulous attention to detail and quality construction that ensures lasting beauty and functionality.'
    },
    {
      step: 5,
      title: 'Professional Installation',
      description: 'I personally handle the installation and coordinate with electricians for any electrical integration, ensuring perfect fit and seamless integration with your bedroom.'
    },
    {
      step: 6,
      title: 'Organization & Styling',
      description: 'I help you organize your belongings in the new storage systems and provide personalized tips for maintaining your beautifully organized bedroom space.'
    }
  ];

  benefits = [
    'Create a serene, organized bedroom environment',
    'Maximize storage without sacrificing bedroom aesthetics',
    'Increase home value with custom built-in features',
    'Enjoy personalized storage for your specific needs',
    'Eliminate bedroom clutter and improve daily routines',
    'Get furniture-quality pieces built specifically for your space',
    'Benefit from integrated technology and modern conveniences',
    'Experience the luxury of a completely customized bedroom'
  ];

  onGetQuoteClick() {
    // Navigate to the get-started page
    this.router.navigate(['/get-started']);
  }
}
