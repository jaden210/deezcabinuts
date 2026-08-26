import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface LivingRoomFeature {
  title: string;
  description: string;
  icon: string;
}

interface LivingRoomStyle {
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
  selector: 'app-living-room-cabinetry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './living-room-cabinetry.component.html',
  styleUrl: './living-room-cabinetry.component.scss'
})
export class LivingRoomCabinetryComponent implements OnInit {
  
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
    this.title.setTitle('Custom Living Room Cabinetry | Built-in Entertainment & Storage Solutions | Deez Cabinuts');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Transform your living room with custom built-in cabinetry from Deez Cabinuts. Entertainment centers, display cabinets, and storage solutions with sophisticated textured melamine finishes. Get your free consultation today!'
    });

    // Set additional SEO meta tags
    this.meta.updateTag({ name: 'keywords', content: 'custom living room cabinets, entertainment centers, built-in media storage, living room renovation, display cabinets, family room cabinetry' });
    this.meta.updateTag({ property: 'og:title', content: 'Custom Living Room Cabinetry | Built-in Entertainment & Storage Solutions' });
    this.meta.updateTag({ property: 'og:description', content: 'Transform your living room with custom built-in cabinetry from Deez Cabinuts. Entertainment centers, display cabinets, and storage solutions with sophisticated textured melamine finishes.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Living Room Cabinetry | Built-in Entertainment & Storage Solutions' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Transform your living room with custom built-in cabinetry from Deez Cabinets. Entertainment centers, display cabinets, and storage solutions with sophisticated textured melamine finishes.' });
  }

  features: LivingRoomFeature[] = [
    {
      title: 'Architectural Integration',
      description: 'I design every living room cabinet to integrate seamlessly with your home\'s architecture, creating beautiful built-in appearances that enhance your space.',
      icon: ''
    },
    {
      title: 'Entertainment Solutions',
      description: 'Custom entertainment centers with smart cable management, ventilation, and storage that handle all your media equipment while maintaining clean aesthetics.',
      icon: ''
    },
    {
      title: 'Display & Storage',
      description: 'Beautiful display areas for collections, books, and décor combined with hidden storage for clutter-free living spaces.',
      icon: ''
    },
    {
      title: 'Flexible Design',
      description: 'Modular systems that can be reconfigured as your needs change, from growing families to evolving entertainment technology.',
      icon: ''
    },
    {
      title: 'Quality Craftsmanship',
      description: 'Built with premium materials and expert construction that ensures your living room cabinetry remains beautiful and functional for decades.',
      icon: ''
    },
    {
      title: 'Style Coordination',
      description: 'I personally ensure your new cabinetry complements your existing décor and furniture while enhancing your living room\'s overall design.',
      icon: ''
    }
  ];

  livingRoomStyles: LivingRoomStyle[] = [
    {
      name: 'Entertainment Centers & Media Walls',
      description: 'Comprehensive entertainment systems with TV mounting, component storage, and integrated sound system accommodation.',
      features: [
        'Custom TV mounting and framing',
        'Component storage with ventilation',
        'Cable management and organization',
        'Sound system integration',
        'Gaming console accommodation',
        'Streaming device storage',
        'Remote control organization'
      ]
    },
    {
      name: 'Built-in Bookcases & Display Units',
      description: 'Elegant floor-to-ceiling storage and display solutions that showcase your collections while providing ample storage.',
      features: [
        'Adjustable shelving systems',
        'Integrated lighting options',
        'Display areas for collections',
        'Hidden storage compartments',
        'Book and media organization',
        'Decorative object showcasing'
      ]
    },
    {
      name: 'Window Seat & Storage Benches',
      description: 'Beautiful seating solutions with integrated storage that maximize functionality while creating cozy gathering spaces.',
      features: [
        'Comfortable seating with storage',
        'Custom cushion coordination',
        'Reading nook creation',
        'Toy and game storage',
        'Seasonal item accommodation',
        'Architectural enhancement'
      ]
    },
    {
      name: 'Room Divider & Partition Systems',
      description: 'Functional room dividers that create defined spaces while providing storage and display on both sides.',
      features: [
        'Open concept space definition',
        'Double-sided storage access',
        'Display shelving integration',
        'Privacy without walls',
        'Multi-zone organization',
        'Flexible space utilization'
      ]
    }
  ];

  materials = [
    {
      name: 'Solid Hardwood',
      description: 'Premium hardwood construction that brings warmth and traditional elegance to your living spaces, perfect for classic and transitional designs.',
      benefits: ['Natural beauty and grain character', 'Long-lasting durability', 'Timeless living room appeal', 'Can be refinished over time', 'Perfect for traditional and transitional styles']
    },
    {
      name: 'Engineered Wood with Textured Melamine',
      description: 'Modern engineered materials with sophisticated textured melamine surfaces, ideal for contemporary living rooms with clean lines and easy maintenance.',
      benefits: ['Contemporary textured finishes', 'Easy cleaning and maintenance', 'Consistent appearance quality', 'Perfect for modern living room aesthetics', 'Excellent durability for family use']
    }
  ];

  designFeatures = [
    'Integrated LED lighting for ambiance and display',
    'Cable management systems for clean aesthetics',
    'Ventilated compartments for electronics',
    'Adjustable shelving for changing needs',
    'Hidden storage for everyday clutter',
    'Display areas for collections and décor',
    'Cord-free charging station integration',
    'Sound system wire concealment',
    'Child-safe storage solutions',
    'Easy-access media organization'
  ];

  finishOptions = [
    'Textured Wood Grain Melamine (Rich Oak, Walnut, Cherry patterns for living room warmth)',
    'Textured Stone & Concrete Effects (Modern sophisticated living space looks)',
    'Textured Fabric & Linen Patterns (Soft, comfortable living room textures)',
    'Smooth Solid Colors in welcoming hues (Warm White, Soft Gray, Rich Navy)',
    'Ultra-Matte Finishes (Fingerprint resistant for family living spaces)',
    'Two-tone combinations for visual interest and modern appeal',
    'Custom textured melamine options for unique living room designs'
  ];

  faqs: FAQ[] = [
    {
      question: 'Can living room cabinetry accommodate different TV sizes and future upgrades?',
      answer: 'Absolutely! I design entertainment centers with flexibility in mind, including adjustable mounting systems and spacious openings that can accommodate TV upgrades. The cable management and storage are designed to handle evolving technology needs.'
    },
    {
      question: 'How do you handle ventilation and heat management for electronics?',
      answer: 'I incorporate proper ventilation into all entertainment cabinetry, including ventilated compartments, spacing for airflow, and sometimes even fan systems for high-heat components. This ensures your electronics stay cool and function properly.'
    },
    {
      question: 'Can living room cabinets work in open concept spaces?',
      answer: 'Yes! I specialize in designing cabinetry that enhances open concept layouts, including room divider systems, peninsula units, and strategically placed storage that defines spaces without blocking sight lines or natural light.'
    },
    {
      question: 'What storage solutions work best for families with children?',
      answer: 'For families, I incorporate child-safe storage for toys and games, durable finishes that handle daily use, and designs that can adapt as children grow. This includes lower accessible storage for kids and higher secure storage for adult items.'
    },
    {
      question: 'How do you ensure living room cabinets complement existing furniture?',
      answer: 'I work closely with you to coordinate new cabinetry with your existing furniture style, color palette, and room layout. I can match finishes, complement design themes, or create intentional contrasts that enhance your overall décor.'
    },
    {
      question: 'Can living room cabinetry include display lighting?',
      answer: 'Definitely! I can integrate various lighting options including LED strip lighting, puck lights, and accent lighting that highlights your collections and creates beautiful ambiance in your living space.'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Living Space Assessment',
      description: 'I start by understanding your living room layout, entertainment needs, and storage challenges. We\'ll discuss your lifestyle and I\'ll provide personalized recommendations for optimal functionality.'
    },
    {
      step: 2,
      title: 'Design & Integration Planning',
      description: 'I create detailed plans that integrate seamlessly with your architecture and existing décor. You\'ll receive 3D renderings to visualize your transformed living space.'
    },
    {
      step: 3,
      title: 'Style & Feature Selection',
      description: 'Choose from my curated selection of materials, finishes, and integrated features. I\'ll guide you to create the perfect combination for your living room\'s aesthetic and functionality.'
    },
    {
      step: 4,
      title: 'Precision Manufacturing',
      description: 'Your living room cabinetry is custom-built by me in my workshop with meticulous attention to detail and quality construction that ensures lasting beauty and performance.'
    },
    {
      step: 5,
      title: 'Professional Installation',
      description: 'I personally handle the installation and coordinate with electricians for lighting and AV integration, ensuring perfect fit and seamless operation of all systems.'
    },
    {
      step: 6,
      title: 'Setup & Organization',
      description: 'I help you organize your electronics, media, and belongings in the new system and provide tips for maintaining your beautifully organized living space.'
    }
  ];

  benefits = [
    'Create a sophisticated, organized living environment',
    'Maximize storage while maintaining clean aesthetics',
    'Increase home value with custom built-in features',
    'Enjoy seamless entertainment and media organization',
    'Eliminate living room clutter and cable chaos',
    'Get furniture-quality pieces built for your exact space',
    'Benefit from integrated technology and lighting',
    'Experience the luxury of a completely customized living room'
  ];

  onGetQuoteClick() {
    // Navigate to the get-started page
    this.router.navigate(['/get-started']);
  }
}
