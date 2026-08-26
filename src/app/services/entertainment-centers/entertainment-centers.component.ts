import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface EntertainmentFeature {
  title: string;
  description: string;
  icon: string;
}

interface EntertainmentStyle {
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
  selector: 'app-entertainment-centers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entertainment-centers.component.html',
  styleUrl: './entertainment-centers.component.scss'
})
export class EntertainmentCentersComponent implements OnInit {
  
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
    this.title.setTitle('Custom Entertainment Centers | TV Stands & Media Consoles | Deez Cabinuts');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Transform your entertainment space with custom entertainment centers from Deez Cabinuts. TV stands, media consoles, and home theater systems with smart cable management and sophisticated textured melamine finishes. Get your free consultation today!'
    });

    // Set additional SEO meta tags
    this.meta.updateTag({ name: 'keywords', content: 'custom entertainment centers, TV stands, media consoles, home theater cabinets, entertainment furniture, media storage solutions' });
    this.meta.updateTag({ property: 'og:title', content: 'Custom Entertainment Centers | TV Stands & Media Consoles' });
    this.meta.updateTag({ property: 'og:description', content: 'Transform your entertainment space with custom entertainment centers from Deez Cabinuts. TV stands, media consoles, and home theater systems with smart cable management and sophisticated textured melamine finishes.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Entertainment Centers | TV Stands & Media Consoles' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Transform your entertainment space with custom entertainment centers from Deez Cabinuts. TV stands, media consoles, and home theater systems with smart cable management and sophisticated textured melamine finishes.' });
  }

  features: EntertainmentFeature[] = [
    {
      title: 'Perfect TV Integration',
      description: 'I design every entertainment center to perfectly accommodate your TV size and viewing preferences, with options for mounting or freestanding displays.',
      icon: ''
    },
    {
      title: 'Smart Cable Management',
      description: 'Advanced cable organization systems that keep all your wires hidden and organized while providing easy access for adjustments and upgrades.',
      icon: ''
    },
    {
      title: 'Component Storage',
      description: 'Dedicated storage for all your entertainment devices with proper ventilation, accessibility, and protection from dust and damage.',
      icon: ''
    },
    {
      title: 'Future-Proof Design',
      description: 'Flexible systems that can adapt to new technology and changing entertainment needs, ensuring your investment remains relevant for years.',
      icon: ''
    },
    {
      title: 'Acoustic Optimization',
      description: 'I personally consider sound quality in every design, with features that enhance your audio experience and minimize unwanted vibrations.',
      icon: ''
    },
    {
      title: 'Seamless Integration',
      description: 'Entertainment centers that integrate beautifully with your room\'s architecture and existing décor while maintaining functionality.',
      icon: ''
    }
  ];

  entertainmentStyles: EntertainmentStyle[] = [
    {
      name: 'Wall-Mounted Entertainment Systems',
      description: 'Sleek floating entertainment centers that create a modern, streamlined look while maximizing floor space.',
      features: [
        'Floating TV console design',
        'Hidden wall mounting hardware',
        'Integrated cable management',
        'Component storage compartments',
        'LED lighting integration',
        'Clean, modern aesthetics'
      ]
    },
    {
      name: 'Traditional TV Stands & Consoles',
      description: 'Classic entertainment furniture with ample storage and traditional styling that complements any décor.',
      features: [
        'Stable TV platform with safety features',
        'Multiple component compartments',
        'Adjustable shelving systems',
        'Cable routing and management',
        'Decorative door and drawer options',
        'Classic furniture aesthetics'
      ]
    },
    {
      name: 'Home Theater Systems',
      description: 'Comprehensive entertainment walls designed for dedicated home theater and media rooms.',
      features: [
        'Full wall entertainment integration',
        'Surround sound system accommodation',
        'Projector and screen housing',
        'Theater seating coordination',
        'Lighting control integration',
        'Acoustic panel integration'
      ]
    },
    {
      name: 'Corner & Space-Saving Units',
      description: 'Efficient entertainment solutions designed to maximize functionality in compact or challenging spaces.',
      features: [
        'Corner space optimization',
        'Compact storage solutions',
        'Multi-functional design elements',
        'Space-efficient cable management',
        'Adjustable configuration options',
        'Small room friendly proportions'
      ]
    }
  ];

  materials = [
    {
      name: 'Solid Hardwood',
      description: 'Premium hardwood construction that provides the stability and durability needed for heavy entertainment equipment while adding natural warmth.',
      benefits: ['Superior strength for heavy equipment', 'Natural vibration dampening', 'Timeless entertainment furniture appeal', 'Can be refinished over time', 'Perfect for traditional and transitional designs']
    },
    {
      name: 'Engineered Wood with Textured Melamine',
      description: 'Modern engineered materials with sophisticated textured melamine surfaces, ideal for contemporary entertainment spaces with easy maintenance and consistent performance.',
      benefits: ['Contemporary textured finishes', 'Easy cleaning and maintenance', 'Consistent appearance quality', 'Perfect for modern entertainment aesthetics', 'Excellent durability for daily use']
    }
  ];

  technologyFeatures = [
    'Integrated power outlets and USB charging ports',
    'Ventilated compartments for heat-sensitive electronics',
    'Cord-free device charging station integration',
    'Remote control storage and organization',
    'Gaming console and accessory storage',
    'Streaming device and cable box accommodation',
    'Sound system wire concealment and routing',
    'TV mounting systems with tilt and swivel options',
    'Component accessibility for easy maintenance',
    'Future expansion capability planning'
  ];

  finishOptions = [
    'Textured Wood Grain Melamine (Entertainment Oak, Walnut, Espresso patterns)',
    'Textured Stone & Concrete Effects (Modern industrial entertainment looks)',
    'Textured Fabric & Linen Patterns (Sophisticated entertainment room textures)',
    'Smooth Solid Colors in contemporary hues (Matte Black, Charcoal Gray, Pure White)',
    'Ultra-Matte Finishes (Fingerprint resistant for daily entertainment use)',
    'Two-tone combinations for striking visual entertainment focal points',
    'Custom textured melamine options for unique entertainment center designs'
  ];

  faqs: FAQ[] = [
    {
      question: 'Can entertainment centers accommodate different TV sizes and future upgrades?',
      answer: 'Absolutely! I design entertainment centers with flexibility in mind, including adjustable mounting systems, spacious openings, and modular components that can accommodate TV upgrades and new technology without requiring complete replacement.'
    },
    {
      question: 'How do you handle ventilation for electronics and prevent overheating?',
      answer: 'I incorporate proper ventilation into all entertainment center designs, including ventilated back panels, strategic spacing for airflow, and sometimes active cooling systems for high-heat components. This ensures your expensive electronics stay cool and function properly.'
    },
    {
      question: 'What cable management solutions do you provide?',
      answer: 'I include comprehensive cable management in every entertainment center, featuring hidden routing channels, cable access points, cord organization systems, and power management. This eliminates the cable chaos while keeping everything easily accessible for changes.'
    },
    {
      question: 'Can entertainment centers work with existing sound systems?',
      answer: 'Yes! I design entertainment centers to work with all types of sound systems, from soundbars to full surround sound setups. This includes proper speaker placement, subwoofer accommodation, and wire management for optimal audio performance.'
    },
    {
      question: 'How do you ensure the entertainment center fits my room and décor?',
      answer: 'I work closely with you to ensure your entertainment center complements your room size, viewing angles, existing furniture, and décor style. Every design is customized to enhance your space while providing optimal entertainment functionality.'
    },
    {
      question: 'What storage options are available for games, movies, and accessories?',
      answer: 'I can incorporate various storage solutions including adjustable shelving for media collections, drawers for gaming accessories, hidden compartments for remote controls, and specialized storage for different types of entertainment equipment and media.'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Entertainment Assessment',
      description: 'I start by understanding your entertainment setup, viewing habits, and technology needs. We\'ll discuss your equipment and I\'ll provide personalized recommendations for optimal entertainment integration.'
    },
    {
      step: 2,
      title: 'Design & Technology Planning',
      description: 'I create detailed plans that accommodate your specific equipment and viewing preferences. You\'ll receive 3D renderings to visualize your custom entertainment solution.'
    },
    {
      step: 3,
      title: 'Style & Technology Selection',
      description: 'Choose from my curated selection of materials, finishes, and integrated technology features. I\'ll guide you to create the perfect combination for your entertainment space.'
    },
    {
      step: 4,
      title: 'Precision Manufacturing',
      description: 'Your entertainment center is custom-built by me in my workshop with meticulous attention to detail and quality construction that handles heavy equipment and daily use.'
    },
    {
      step: 5,
      title: 'Professional Installation',
      description: 'I personally handle the installation and coordinate with electricians for power and AV integration, ensuring perfect fit and optimal performance of all systems.'
    },
    {
      step: 6,
      title: 'Setup & Optimization',
      description: 'I help you set up your entertainment equipment in the new center and provide guidance on cable management and system optimization for the best experience.'
    }
  ];

  benefits = [
    'Create a sophisticated entertainment focal point',
    'Eliminate cable chaos and equipment clutter',
    'Increase home value with custom entertainment furniture',
    'Enjoy optimal viewing angles and equipment access',
    'Protect expensive electronics with proper ventilation',
    'Get furniture-quality pieces built for your exact needs',
    'Benefit from integrated technology and smart features',
    'Experience the luxury of a completely customized entertainment space'
  ];

  onGetQuoteClick() {
    // Navigate to the get-started page
    this.router.navigate(['/get-started']);
  }
}
