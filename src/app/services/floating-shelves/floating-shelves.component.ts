import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface ShelfFeature {
  title: string;
  description: string;
  icon: string;
}

interface ShelfStyle {
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
  selector: 'app-floating-shelves',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-shelves.component.html',
  styleUrl: './floating-shelves.component.scss'
})
export class FloatingShelvesComponent implements OnInit {
  
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
    this.title.setTitle('Custom Floating Shelves | Modern Wall Shelving & Display Solutions | Deez Cabinuts');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Transform your walls with custom floating shelves from Deez Cabinuts. Modern wall shelving for books, décor, and storage with sophisticated textured melamine and hardwood finishes. Create clean, minimalist display solutions. Get your free consultation today!'
    });

    // Set additional SEO meta tags
    this.meta.updateTag({ name: 'keywords', content: 'custom floating shelves, wall shelves, floating shelf installation, modern shelving, display shelves, minimalist storage solutions' });
    this.meta.updateTag({ property: 'og:title', content: 'Custom Floating Shelves | Modern Wall Shelving & Display Solutions' });
    this.meta.updateTag({ property: 'og:description', content: 'Transform your walls with custom floating shelves from Deez Cabinuts. Modern wall shelving for books, décor, and storage with sophisticated textured melamine and hardwood finishes.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Floating Shelves | Modern Wall Shelving & Display Solutions' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Transform your walls with custom floating shelves from Deez Cabinuts. Modern wall shelving for books, décor, and storage with sophisticated textured melamine and hardwood finishes.' });
  }

  features: ShelfFeature[] = [
    {
      title: 'Invisible Mounting',
      description: 'I design every floating shelf with hidden mounting systems that create the illusion of shelves effortlessly floating on your wall.',
      icon: ''
    },
    {
      title: 'Custom Dimensions',
      description: 'Each shelf is precisely sized for your specific space and load requirements, ensuring perfect proportions and optimal functionality.',
      icon: ''
    },
    {
      title: 'Clean Aesthetics',
      description: 'Minimalist design that enhances your décor without overwhelming your space, creating clean lines and visual breathing room.',
      icon: ''
    },
    {
      title: 'Versatile Applications',
      description: 'Perfect for displaying books, art, plants, collectibles, or everyday items while maintaining an organized, clutter-free appearance.',
      icon: ''
    },
    {
      title: 'Secure Installation',
      description: 'I personally ensure proper wall anchoring and weight distribution for safe, long-lasting installation that you can trust.',
      icon: ''
    },
    {
      title: 'Design Integration',
      description: 'Floating shelves that complement your existing architecture and interior design, enhancing rather than competing with your style.',
      icon: ''
    }
  ];

  shelfStyles: ShelfStyle[] = [
    {
      name: 'Minimalist Display Shelves',
      description: 'Clean, simple floating shelves that provide elegant display space while maintaining modern minimalist aesthetics.',
      features: [
        'Ultra-thin profile design',
        'Seamless wall integration',
        'Hidden bracket systems',
        'Clean, geometric lines',
        'Versatile display applications',
        'Modern minimalist appeal'
      ]
    },
    {
      name: 'Kitchen & Bathroom Floating Shelves',
      description: 'Functional floating shelves designed for high-moisture environments with easy-clean surfaces and practical storage.',
      features: [
        'Moisture-resistant finishes',
        'Easy-clean surfaces',
        'Practical storage solutions',
        'Space-efficient design',
        'Organized item display',
        'Hygiene-friendly materials'
      ]
    },
    {
      name: 'Living Room Display Systems',
      description: 'Sophisticated floating shelf arrangements that showcase your books, art, and collectibles in living spaces.',
      features: [
        'Artistic arrangement options',
        'Book and media display',
        'Decorative object showcasing',
        'Integrated lighting compatibility',
        'Flexible configuration systems',
        'Sophisticated visual appeal'
      ]
    },
    {
      name: 'Office & Workspace Shelving',
      description: 'Functional floating shelves that organize your workspace while maintaining professional, clean aesthetics.',
      features: [
        'Professional workspace organization',
        'Document and supply storage',
        'Reference material accessibility',
        'Clean desk maintenance',
        'Productivity enhancement',
        'Modern office aesthetics'
      ]
    }
  ];

  materials = [
    {
      name: 'Solid Hardwood',
      description: 'Premium hardwood construction that provides natural beauty and strength for displaying your most treasured items.',
      benefits: ['Natural wood grain beauty', 'Superior strength and durability', 'Timeless aesthetic appeal', 'Can be refinished over time', 'Perfect for traditional and modern spaces']
    },
    {
      name: 'Engineered Wood with Textured Melamine',
      description: 'Modern engineered materials with sophisticated textured melamine surfaces, ideal for contemporary spaces with consistent performance.',
      benefits: ['Contemporary textured finishes', 'Consistent appearance quality', 'Easy cleaning and maintenance', 'Moisture-resistant properties', 'Perfect for modern minimalist aesthetics']
    }
  ];

  designFeatures = [
    'Hidden mounting hardware for clean appearance',
    'Custom thickness and depth specifications',
    'Precise corner and edge details',
    'Integrated LED lighting compatibility',
    'Multiple shelf arrangement systems',
    'Weight-appropriate mounting solutions',
    'Wall stud location optimization',
    'Cable management for electronics',
    'Adjustable and modular configurations',
    'Coordinated finish matching with existing décor'
  ];

  finishOptions = [
    'Textured Wood Grain Melamine (Modern Oak, Walnut, Ash patterns for contemporary appeal)',
    'Textured Stone & Concrete Effects (Industrial and sophisticated minimalist looks)',
    'Smooth Solid Colors in clean hues (Pure White, Soft Gray, Matte Black)',
    'Natural Wood Stains highlighting grain patterns (Light Oak, Dark Walnut, Natural Maple)',
    'Ultra-Matte Finishes for fingerprint resistance and easy maintenance',
    'Two-tone combinations for visual interest and modern design appeal',
    'Custom textured melamine options for unique floating shelf designs'
  ];

  faqs: FAQ[] = [
    {
      question: 'How much weight can floating shelves support?',
      answer: 'The weight capacity depends on the shelf size, mounting method, and wall type. I design each installation with proper wall anchoring and can typically support 30-50 lbs per linear foot, with heavier loads possible using specialized mounting systems.'
    },
    {
      question: 'Can floating shelves be installed on any type of wall?',
      answer: 'I can install floating shelves on most wall types including drywall, plaster, brick, and concrete. Each installation method is customized for your specific wall construction to ensure secure, long-lasting mounting.'
    },
    {
      question: 'How do you hide the mounting hardware completely?',
      answer: 'I use specialized hidden bracket systems that are routed into the back of the shelf and secured to heavy-duty wall mounts. This creates the true "floating" appearance with no visible hardware or support brackets.'
    },
    {
      question: 'Can floating shelves include integrated lighting?',
      answer: 'Absolutely! I can incorporate LED strip lighting, puck lights, or accent lighting into floating shelf designs. This creates beautiful ambiance and highlights your displayed items while maintaining the clean aesthetic.'
    },
    {
      question: 'What\'s the best spacing for multiple floating shelves?',
      answer: 'Shelf spacing depends on what you\'re displaying and your room proportions. I typically recommend 8-12 inches for books, 12-18 inches for décor items, and custom spacing based on your specific display needs and ceiling height.'
    },
    {
      question: 'Can floating shelves be reconfigured or moved later?',
      answer: 'While floating shelves require permanent wall mounting, I can design modular systems that allow for some reconfiguration. Moving shelves to new locations would require new mounting points and wall patching of old holes.'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Space & Display Assessment',
      description: 'I start by understanding your display needs, wall space, and aesthetic goals. We\'ll discuss what you want to showcase and I\'ll provide personalized recommendations for optimal shelf placement.'
    },
    {
      step: 2,
      title: 'Design & Layout Planning',
      description: 'I create detailed plans that optimize your wall space and create visually pleasing arrangements. You\'ll receive layouts showing exact placement and proportions.'
    },
    {
      step: 3,
      title: 'Material & Finish Selection',
      description: 'Choose from my curated selection of premium materials and sophisticated finishes. I\'ll guide you to create the perfect combination for your space and style.'
    },
    {
      step: 4,
      title: 'Precision Manufacturing',
      description: 'Your floating shelves are custom-built by me in my workshop with meticulous attention to detail and specialized mounting systems for secure installation.'
    },
    {
      step: 5,
      title: 'Professional Installation',
      description: 'I personally handle the installation with proper wall anchoring techniques, ensuring your shelves are securely mounted and perfectly level.'
    },
    {
      step: 6,
      title: 'Styling & Organization',
      description: 'I can provide guidance on arranging your items for optimal visual impact and help you create beautiful displays on your new floating shelves.'
    }
  ];

  benefits = [
    'Create modern, minimalist display solutions',
    'Maximize wall space without floor footprint',
    'Increase home value with custom built-in features',
    'Enjoy clutter-free organization and display',
    'Get perfectly sized shelves for your specific needs',
    'Add architectural interest to plain walls',
    'Experience secure, professional installation',
    'Receive completely customized storage and display solutions'
  ];

  onGetQuoteClick() {
    // Navigate to the get-started page
    this.router.navigate(['/get-started']);
  }
}
