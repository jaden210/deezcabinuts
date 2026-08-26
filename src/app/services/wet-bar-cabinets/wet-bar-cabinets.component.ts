import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface WetBarFeature {
  title: string;
  description: string;
  icon: string;
}

interface WetBarStyle {
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
  selector: 'app-wet-bar-cabinets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wet-bar-cabinets.component.html',
  styleUrl: './wet-bar-cabinets.component.scss'
})
export class WetBarCabinetsComponent implements OnInit {
  
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
    this.title.setTitle('Custom Wet Bar Cabinets | Entertainment & Wine Storage Solutions | Deez Cabinuts');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Transform your entertaining space with custom wet bar cabinets from Deez Cabinuts. Premium wine storage, glassware organization, and textured melamine finishes. Get your free consultation today!'
    });

    // Set additional SEO meta tags
    this.meta.updateTag({ name: 'keywords', content: 'custom wet bar cabinets, home bar design, wine storage cabinets, entertainment cabinets, bar cabinet installation, custom bar solutions' });
    this.meta.updateTag({ property: 'og:title', content: 'Custom Wet Bar Cabinets | Entertainment & Wine Storage Solutions' });
    this.meta.updateTag({ property: 'og:description', content: 'Transform your entertaining space with custom wet bar cabinets from Deez Cabinuts. Premium wine storage, glassware organization, and textured melamine finishes.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Wet Bar Cabinets | Entertainment & Wine Storage Solutions' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Transform your entertaining space with custom wet bar cabinets from Deez Cabinuts. Premium wine storage, glassware organization, and textured melamine finishes.' });
  }

  features: WetBarFeature[] = [
    {
      title: 'Entertainment-Focused Design',
      description: 'I design each wet bar to enhance your entertaining experience with easy access to everything you need to host memorable gatherings.',
      icon: ''
    },
    {
      title: 'Specialized Storage',
      description: 'Custom wine racks, glassware storage, and bottle organization systems designed specifically for your collection and entertaining style.',
      icon: ''
    },
    {
      title: 'Elegant Aesthetics',
      description: 'Beautiful finishes and sophisticated design that becomes a stunning focal point in your entertainment space.',
      icon: ''
    },
    {
      title: 'Functional Layout',
      description: 'I optimize every inch for efficient bartending and service flow, making entertaining effortless and enjoyable.',
      icon: ''
    },
    {
      title: 'Premium Materials',
      description: 'Moisture-resistant construction and durable finishes that withstand the demands of a wet bar environment.',
      icon: ''
    },
    {
      title: 'Custom Integration',
      description: 'I personally design each wet bar to integrate seamlessly with your existing décor and entertainment space.',
      icon: ''
    }
  ];

  wetBarStyles: WetBarStyle[] = [
    {
      name: 'Full-Service Wet Bar',
      description: 'Complete entertainment center with sink, storage, and serving area for the ultimate hosting experience.',
      features: [
        'Built-in sink and plumbing integration',
        'Extensive wine and liquor storage',
        'Dedicated glassware and barware organization',
        'Counter space for mixing and serving',
        'Under-cabinet lighting for ambiance'
      ]
    },
    {
      name: 'Wine Bar & Storage',
      description: 'Sophisticated wine-focused design with climate considerations and elegant display options.',
      features: [
        'Custom wine rack configurations',
        'Temperature-controlled storage zones',
        'Stemware hanging and storage',
        'Wine accessory organization',
        'Display areas for special bottles'
      ]
    },
    {
      name: 'Compact Bar Cabinet',
      description: 'Space-efficient solutions that provide full bar functionality in smaller areas.',
      features: [
        'Fold-out or pull-out serving surfaces',
        'Vertical storage maximization',
        'Hidden storage compartments',
        'Integrated ice bucket storage',
        'Compact appliance integration'
      ]
    },
    {
      name: 'Butler\'s Bar',
      description: 'Elegant pass-through design connecting kitchen and entertaining areas with style and function.',
      features: [
        'Pass-through serving capability',
        'Dual-sided access and storage',
        'Elegant finishing on both sides',
        'Coordinated kitchen integration',
        'Professional serving setup'
      ]
    }
  ];

  materials = [
    {
      name: 'Solid Hardwood',
      description: 'Premium hardwood construction that provides elegant beauty and lasting durability for your entertaining space.',
      benefits: ['Timeless natural beauty', 'Superior durability', 'Can be refinished over time', 'Elegant grain patterns', 'Perfect for traditional designs']
    },
    {
      name: 'Engineered Wood with Textured Melamine',
      description: 'Modern engineered materials with cutting-edge textured melamine surfaces, perfect for wet bar environments with superior moisture resistance.',
      benefits: ['Excellent moisture resistance', 'Easy maintenance and cleaning', 'Contemporary textured finishes', 'Consistent quality appearance', 'Ideal for modern bar designs']
    }
  ];

  storageFeatures = [
    'Custom wine rack systems for various bottle sizes',
    'Hanging stemware racks and glassware storage',
    'Dedicated liquor and spirits organization',
    'Bar tool and accessory storage compartments',
    'Ice bucket and cocktail napkin storage',
    'Bottle opener and corkscrew integration',
    'Specialized storage for bar mixers and garnishes',
    'Hidden storage for cleaning supplies',
    'Adjustable shelving for varying bottle heights',
    'LED lighting for ambiance and functionality'
  ];

  finishOptions = [
    'Textured Wood Grain Melamine (Rich Walnut, Oak, Cherry patterns)',
    'Textured Stone & Concrete Effects (Modern industrial bar looks)',
    'Textured Fabric & Linen Patterns (Sophisticated entertainment aesthetics)',
    'Smooth Solid Colors in elegant hues (Deep Navy, Charcoal, Rich Black)',
    'Ultra-Matte Finishes (Fingerprint resistant for high-touch areas)',
    'Two-tone combinations for dramatic bar styling',
    'Custom textured melamine options for unique designs'
  ];

  faqs: FAQ[] = [
    {
      question: 'Do you handle plumbing integration for wet bars?',
      answer: 'I work closely with licensed plumbers to ensure proper plumbing integration. While I don\'t do the plumbing work myself, I coordinate with qualified professionals and design the cabinetry to accommodate all plumbing requirements perfectly.'
    },
    {
      question: 'Can you design wet bars for small spaces?',
      answer: 'Absolutely! I specialize in maximizing functionality in any size space. Even compact areas can accommodate beautiful wet bars with smart design, fold-out surfaces, and vertical storage solutions.'
    },
    {
      question: 'What\'s the difference between a wet bar and a dry bar?',
      answer: 'A wet bar includes a sink and running water for washing glasses and mixing drinks, while a dry bar focuses purely on storage and serving without plumbing. I can design either type based on your space and entertaining needs.'
    },
    {
      question: 'How do you protect cabinets from moisture in wet bar areas?',
      answer: 'I use moisture-resistant materials and finishes, proper ventilation design, and waterproof sealing around sink areas. The textured melamine finishes I recommend are particularly excellent for wet bar environments.'
    },
    {
      question: 'Can wet bar cabinets be designed to match existing kitchen cabinets?',
      answer: 'Yes! I can design your wet bar to complement your existing kitchen or create a coordinated look throughout your entertaining spaces. We can match materials, finishes, and hardware for a cohesive design.'
    },
    {
      question: 'How long does a wet bar cabinet project typically take?',
      answer: 'Most wet bar projects take 2-4 weeks depending on complexity and whether plumbing work is required. Simple dry bars or cabinet-only installations can often be completed more quickly.'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Entertainment Assessment',
      description: 'I start by understanding your entertaining style, space constraints, and collection needs. We\'ll discuss your vision and I\'ll provide personalized recommendations for your perfect wet bar.'
    },
    {
      step: 2,
      title: 'Design & Space Planning',
      description: 'I create detailed plans that optimize your space for both storage and entertaining flow. You\'ll receive 3D renderings to visualize your new wet bar.'
    },
    {
      step: 3,
      title: 'Material & Feature Selection',
      description: 'Choose from my curated selection of moisture-resistant materials, elegant finishes, and specialized storage features. I\'ll guide you to make the perfect choices for your entertaining needs.'
    },
    {
      step: 4,
      title: 'Custom Manufacturing',
      description: 'Your wet bar cabinets are custom-built by me in my workshop using premium materials and expert craftsmanship, with personal attention to every entertaining detail.'
    },
    {
      step: 5,
      title: 'Professional Installation',
      description: 'I personally handle the cabinet installation and coordinate with other trades as needed, ensuring perfect integration with your space and any required utilities.'
    },
    {
      step: 6,
      title: 'Setup & Organization',
      description: 'I conduct a thorough walkthrough with you, help organize your wet bar setup, and provide personalized tips for maintaining and enjoying your new entertainment space.'
    }
  ];

  benefits = [
    'Create the perfect entertaining centerpiece for your home',
    'Increase home value with professional wet bar installation',
    'Organize and display your wine and spirits collection beautifully',
    'Enjoy effortless hosting with optimized storage and flow',
    'Impress guests with sophisticated bar setup and service',
    'Maximize storage efficiency in your entertainment space',
    'Protect valuable bottles and glassware with proper storage',
    'Transform any space into an elegant entertainment area'
  ];

  onGetQuoteClick() {
    // Navigate to the get-started page
    this.router.navigate(['/get-started']);
  }
}
