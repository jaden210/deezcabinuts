import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface OfficeFeature {
  title: string;
  description: string;
  icon: string;
}

interface OfficeSolution {
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
  selector: 'app-home-office-cabinets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-office-cabinets.component.html',
  styleUrl: './home-office-cabinets.component.scss'
})
export class HomeOfficeCabinetsComponent implements OnInit {
  
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
    this.title.setTitle('Custom Home Office Cabinets | Built-In Desk & Storage Solutions | Deez Cabinuts');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Transform your workspace with custom home office cabinets from Deez Cabinuts. Built-in desks, filing systems, and storage solutions designed for productivity with premium textured melamine finishes. Create an organized, professional home office. Get your free consultation today!'
    });

    // Set additional SEO meta tags
    this.meta.updateTag({ name: 'keywords', content: 'custom home office cabinets, built-in desk, office storage solutions, home office design, filing cabinets, workspace organization' });
    this.meta.updateTag({ property: 'og:title', content: 'Custom Home Office Cabinets | Built-In Desk & Storage Solutions' });
    this.meta.updateTag({ property: 'og:description', content: 'Transform your workspace with custom home office cabinets from Deez Cabinuts. Built-in desks, filing systems, and storage solutions designed for productivity with premium textured melamine finishes.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Home Office Cabinets | Built-In Desk & Storage Solutions' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Transform your workspace with custom home office cabinets from Deez Cabinuts. Built-in desks, filing systems, and storage solutions designed for productivity with premium textured melamine finishes.' });
  }

  features: OfficeFeature[] = [
    {
      title: 'Productivity-Focused Design',
      description: 'I design every home office cabinet system to enhance your workflow and productivity, creating organized spaces that support your professional success.',
      icon: ''
    },
    {
      title: 'Integrated Desk Solutions',
      description: 'Custom built-in desks that seamlessly integrate with your storage, providing ergonomic workspaces tailored to your specific needs and work style.',
      icon: ''
    },
    {
      title: 'Smart Storage Systems',
      description: 'Intelligent storage solutions for files, supplies, technology, and personal items that keep your workspace organized and clutter-free.',
      icon: ''
    },
    {
      title: 'Cable Management',
      description: 'Integrated cable management systems that keep your technology organized and your workspace clean, supporting modern home office equipment.',
      icon: ''
    },
    {
      title: 'Professional Aesthetics',
      description: 'Sophisticated designs that create a professional atmosphere while complementing your home\'s overall style and architecture.',
      icon: ''
    },
    {
      title: 'Flexible Configurations',
      description: 'Modular designs that can adapt to changing needs, whether you\'re scaling your business or adjusting your work requirements.',
      icon: ''
    }
  ];

  officeSolutions: OfficeSolution[] = [
    {
      name: 'Executive Home Office Suites',
      description: 'Comprehensive office solutions with integrated desks, filing systems, and display areas for the ultimate professional workspace.',
      features: [
        'Large integrated desk surfaces',
        'Executive filing and storage systems',
        'Built-in bookcases and display areas',
        'Technology integration and cable management',
        'Professional meeting and presentation areas',
        'Sophisticated, high-end finishes'
      ]
    },
    {
      name: 'Compact Office Solutions',
      description: 'Space-efficient designs that maximize productivity in smaller areas, perfect for apartments, condos, or multipurpose rooms.',
      features: [
        'Space-saving wall-mounted desks',
        'Vertical storage optimization',
        'Fold-away and convertible features',
        'Multi-functional furniture integration',
        'Efficient filing and supply storage',
        'Clean, minimalist aesthetics'
      ]
    },
    {
      name: 'Creative Workspace Studios',
      description: 'Specialized storage for creative professionals with flexible systems for art supplies, project materials, and inspiration displays.',
      features: [
        'Adjustable shelving for varying project sizes',
        'Specialized storage for art and craft supplies',
        'Large work surfaces for creative projects',
        'Inspiration boards and display areas',
        'Easy-clean surfaces for messy work',
        'Flexible lighting integration'
      ]
    },
    {
      name: 'Dual-Purpose Office Spaces',
      description: 'Versatile designs that transform spaces from home office to guest room, dining room, or family area as needed.',
      features: [
        'Convertible desk and dining surfaces',
        'Hidden office storage behind decorative doors',
        'Guest room integration with fold-away desks',
        'Multi-use furniture and storage systems',
        'Seamless aesthetic transitions',
        'Family-friendly safety considerations'
      ]
    }
  ];

  materials = [
    {
      name: 'Solid Hardwood',
      description: 'Premium hardwood construction that provides the durability and professional appearance essential for productive home office environments.',
      benefits: ['Professional, executive appearance', 'Superior durability for daily use', 'Timeless aesthetic that ages beautifully', 'Can be refinished to maintain appearance', 'Perfect for traditional and contemporary offices']
    },
    {
      name: 'Engineered Wood with Textured Melamine',
      description: 'Modern engineered materials with sophisticated textured melamine surfaces, ideal for contemporary workspaces requiring easy maintenance.',
      benefits: ['Contemporary professional finishes', 'Easy cleaning and maintenance', 'Scratch and moisture resistance', 'Consistent appearance quality', 'Perfect for modern home office aesthetics']
    }
  ];

  designFeatures = [
    'Ergonomic desk height and depth specifications',
    'Integrated filing systems for legal and letter sizes',
    'Technology integration with charging stations',
    'Cable management and wire organization',
    'Adjustable shelving for books and binders',
    'Hidden storage for office supplies and equipment',
    'Printer and equipment housing solutions',
    'Lighting integration for task and ambient needs',
    'Sound dampening materials for video calls',
    'Security features for sensitive documents',
    'Ventilation considerations for equipment cooling',
    'Accessibility features for all users'
  ];

  finishOptions = [
    'Textured Wood Grain Melamine (Professional Oak, Rich Walnut, Modern Ash patterns)',
    'Textured Stone & Concrete Effects (Industrial and contemporary professional looks)',
    'Smooth Solid Colors in professional hues (Classic White, Charcoal Gray, Executive Navy)',
    'Natural Wood Stains for traditional office appeal (Dark Cherry, Medium Oak, Espresso)',
    'Ultra-Matte Finishes for fingerprint resistance and professional maintenance',
    'Two-tone combinations for visual interest and modern office design',
    'Custom textured melamine options for unique home office aesthetics'
  ];

  faqs: FAQ[] = [
    {
      question: 'Can you design home office cabinets for small spaces?',
      answer: 'Absolutely! I specialize in space-efficient designs that maximize productivity in compact areas. Wall-mounted desks, vertical storage, and multi-functional pieces can transform even the smallest corner into a fully functional home office.'
    },
    {
      question: 'How do you handle cable management in built-in office furniture?',
      answer: 'I integrate comprehensive cable management systems including built-in channels, grommets, and hidden pathways. This keeps all your technology organized and your workspace clean while providing easy access for maintenance and upgrades.'
    },
    {
      question: 'Can the office design accommodate video conferencing needs?',
      answer: 'Yes! I consider lighting, backgrounds, and acoustics when designing home office spaces. I can incorporate features like built-in lighting, professional backdrops, and sound-dampening materials to enhance your video presence.'
    },
    {
      question: 'What about storage for different types of files and documents?',
      answer: 'I design filing systems for both legal and letter-size documents, with options for hanging files, flat storage for oversized documents, and secure storage for sensitive materials. Everything is organized for easy access and professional efficiency.'
    },
    {
      question: 'Can you create a home office that doesn\'t look like an office?',
      answer: 'Absolutely! I can design dual-purpose spaces that function as professional offices during work hours but integrate seamlessly with your home\'s living spaces. Hidden storage and convertible features maintain your home\'s aesthetic.'
    },
    {
      question: 'How do you ensure the workspace is ergonomically designed?',
      answer: 'I follow ergonomic best practices for desk height, monitor positioning, and storage accessibility. The design considers your specific height, work habits, and any special ergonomic needs to create a comfortable, healthy workspace.'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Workspace & Productivity Assessment',
      description: 'I start by understanding your work requirements, space constraints, and productivity goals. We\'ll discuss your daily workflow and I\'ll provide personalized recommendations for optimal office organization.'
    },
    {
      step: 2,
      title: 'Custom Design & Layout Planning',
      description: 'I create detailed plans that maximize your space efficiency and workflow optimization. You\'ll receive layouts showing exact measurements, storage solutions, and technology integration.'
    },
    {
      step: 3,
      title: 'Material & Finish Selection',
      description: 'Choose from my curated selection of professional materials and sophisticated finishes. I\'ll guide you to create the perfect combination for your work style and home aesthetic.'
    },
    {
      step: 4,
      title: 'Precision Manufacturing',
      description: 'Your home office cabinets are custom-built by me in my workshop with meticulous attention to detail, incorporating all the specialized features your workspace requires.'
    },
    {
      step: 5,
      title: 'Professional Installation',
      description: 'I personally handle the installation with careful attention to technology integration, ensuring everything is properly connected and functioning perfectly.'
    },
    {
      step: 6,
      title: 'Organization & Setup Assistance',
      description: 'I can provide guidance on organizing your new office space and help you set up systems that will maintain productivity and organization long-term.'
    }
  ];

  benefits = [
    'Increase productivity with organized, efficient workspace design',
    'Maximize space utilization in any size room or area',
    'Create professional appearance for video calls and meetings',
    'Enjoy clutter-free organization that reduces stress',
    'Integrate technology seamlessly with cable management systems',
    'Adapt to changing work needs with flexible storage solutions',
    'Increase home value with custom built-in office features',
    'Experience ergonomic comfort designed for daily use'
  ];

  onGetQuoteClick() {
    // Navigate to the get-started page
    this.router.navigate(['/get-started']);
  }
}
