import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface BathroomFeature {
  title: string;
  description: string;
  icon: string;
}

interface BathroomStyle {
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
  selector: 'app-bathroom-cabinets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bathroom-cabinets.component.html',
  styleUrl: './bathroom-cabinets.component.scss'
})
export class BathroomCabinetsComponent implements OnInit {
  
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
    this.title.setTitle('Custom Bathroom Cabinets | Vanities & Storage Solutions | Deez Cabinuts');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Transform your bathroom with custom cabinets from Deez Cabinuts. Moisture-resistant vanities, medicine cabinets, and linen storage with textured melamine finishes. Get your free consultation today!'
    });

    // Set additional SEO meta tags
    this.meta.updateTag({ name: 'keywords', content: 'custom bathroom cabinets, bathroom vanities, medicine cabinets, linen storage, bathroom renovation, moisture resistant cabinets' });
    this.meta.updateTag({ property: 'og:title', content: 'Custom Bathroom Cabinets | Vanities & Storage Solutions' });
    this.meta.updateTag({ property: 'og:description', content: 'Transform your bathroom with custom cabinets from Deez Cabinuts. Moisture-resistant vanities, medicine cabinets, and linen storage with textured melamine finishes.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Bathroom Cabinets | Vanities & Storage Solutions' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Transform your bathroom with custom cabinets from Deez Cabinuts. Moisture-resistant vanities, medicine cabinets, and linen storage with textured melamine finishes.' });
  }

  features: BathroomFeature[] = [
    {
      title: 'Moisture-Resistant Design',
      description: 'I design every bathroom cabinet with moisture resistance in mind, using specialized materials and finishes that thrive in humid environments.',
      icon: ''
    },
    {
      title: 'Maximized Storage',
      description: 'Every inch of your bathroom is optimized for storage with smart solutions for toiletries, towels, and personal care items.',
      icon: ''
    },
    {
      title: 'Custom Sizing',
      description: 'I create cabinets that fit your exact space perfectly, whether it\'s a powder room or master suite, making the most of every bathroom.',
      icon: ''
    },
    {
      title: 'Spa-Like Aesthetics',
      description: 'Beautiful finishes and thoughtful design that transform your bathroom into a relaxing, spa-like retreat.',
      icon: ''
    },
    {
      title: 'Easy Maintenance',
      description: 'Textured melamine surfaces and quality construction that make daily cleaning and maintenance effortless.',
      icon: ''
    },
    {
      title: 'Professional Integration',
      description: 'I personally handle plumbing coordination and ensure seamless integration with your existing fixtures and layout.',
      icon: ''
    }
  ];

  bathroomStyles: BathroomStyle[] = [
    {
      name: 'Double Vanity Systems',
      description: 'Elegant dual sink solutions that provide ample storage and counter space for busy morning routines.',
      features: [
        'Dual sink accommodation with individual storage',
        'Central tower storage between sinks',
        'Generous counter space for daily routines',
        'Coordinated mirror and lighting integration',
        'His and hers organization compartments'
      ]
    },
    {
      name: 'Single Vanity & Storage',
      description: 'Efficient single vanity designs that maximize storage in smaller bathroom spaces.',
      features: [
        'Optimized under-sink storage solutions',
        'Pull-out drawers and organizers',
        'Vertical storage maximization',
        'Integrated towel and linen storage',
        'Space-efficient design'
      ]
    },
    {
      name: 'Linen & Medicine Cabinets',
      description: 'Specialized storage solutions for towels, toiletries, and personal care items.',
      features: [
        'Floor-to-ceiling linen storage',
        'Recessed or surface-mount medicine cabinets',
        'Adjustable shelving systems',
        'Ventilation-friendly design',
        'Easy-access organization'
      ]
    },
    {
      name: 'Powder Room Solutions',
      description: 'Compact yet elegant solutions that make small spaces feel luxurious and functional.',
      features: [
        'Space-efficient pedestal sink storage',
        'Wall-mounted vanity options',
        'Hidden storage compartments',
        'Elegant finishing for guest areas',
        'Minimal footprint design'
      ]
    }
  ];

  materials = [
    {
      name: 'Marine-Grade Solid Wood',
      description: 'Premium hardwood treated with marine-grade finishes for ultimate moisture resistance and longevity.',
      benefits: ['Superior moisture resistance', 'Natural beauty and warmth', 'Long-lasting durability', 'Can withstand bathroom humidity', 'Premium appearance']
    },
    {
      name: 'Engineered Wood with Textured Melamine',
      description: 'Advanced engineered materials with cutting-edge textured melamine surfaces, specifically designed for high-moisture bathroom environments.',
      benefits: ['Excellent moisture and humidity resistance', 'Easy cleaning and maintenance', 'Contemporary textured finishes', 'Consistent quality and appearance', 'Perfect for modern bathroom designs']
    }
  ];

  storageFeatures = [
    'Deep drawers for towel and linen storage',
    'Pull-out organizers for toiletries and cosmetics',
    'Adjustable shelving for varying bottle heights',
    'Soft-close hinges and drawer slides',
    'Hidden compartments for personal items',
    'Integrated hamper and laundry solutions',
    'Medicine cabinet with mirror integration',
    'Under-sink storage maximization',
    'Vertical space utilization systems',
    'Ventilation-friendly storage design'
  ];

  finishOptions = [
    'Textured Wood Grain Melamine (Spa Oak, Bamboo, Teak patterns)',
    'Textured Stone & Tile Effects (Natural stone and ceramic looks)',
    'Textured Fabric & Linen Patterns (Soft, spa-like textures)',
    'Smooth Solid Colors in calming hues (Spa White, Soft Gray, Ocean Blue)',
    'Ultra-Matte Finishes (Water-resistant and easy to clean)',
    'Two-tone combinations for visual interest',
    'Custom textured melamine options for unique designs'
  ];

  faqs: FAQ[] = [
    {
      question: 'How do you ensure bathroom cabinets withstand humidity and moisture?',
      answer: 'I use moisture-resistant materials, marine-grade finishes, and proper ventilation design. The textured melamine finishes I recommend are specifically engineered for high-humidity environments and provide excellent protection against moisture damage.'
    },
    {
      question: 'Can you work around existing plumbing and electrical?',
      answer: 'Absolutely! I specialize in designing around existing plumbing, electrical, and HVAC systems. I carefully measure and plan to accommodate all existing fixtures while maximizing your storage potential.'
    },
    {
      question: 'What\'s the difference between vanity cabinets and medicine cabinets?',
      answer: 'Vanity cabinets are the main storage units typically located under the sink, providing bulk storage for towels and toiletries. Medicine cabinets are smaller, often wall-mounted units designed for frequently used items like medications, toothbrushes, and daily care products.'
    },
    {
      question: 'How do you handle bathroom cabinet installation around tile work?',
      answer: 'I coordinate closely with tile contractors and other trades to ensure proper sequencing. I can install cabinets before or after tile work depending on the design, and always ensure proper sealing and moisture protection at all joints.'
    },
    {
      question: 'Can bathroom cabinets be designed to match other rooms?',
      answer: 'Yes! I can coordinate your bathroom cabinets with kitchen cabinets or other rooms in your home. This creates a cohesive design flow throughout your house while still optimizing each space for its specific needs.'
    },
    {
      question: 'How long does a bathroom cabinet project take?',
      answer: 'Most bathroom cabinet projects take 1-3 weeks depending on complexity and coordination with other trades. Simple vanity installations can often be completed in a few days, while full bathroom renovations with multiple cabinet elements take longer.'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Bathroom Assessment',
      description: 'I start by evaluating your bathroom space, existing fixtures, and storage needs. We\'ll discuss your daily routines and I\'ll provide personalized recommendations for optimal functionality.'
    },
    {
      step: 2,
      title: 'Design & Space Planning',
      description: 'I create detailed plans that work around existing plumbing and maximize your storage potential. You\'ll receive 3D renderings to visualize your new bathroom.'
    },
    {
      step: 3,
      title: 'Material & Finish Selection',
      description: 'Choose from my curated selection of moisture-resistant materials and spa-like finishes. I\'ll guide you to make the perfect choices for your bathroom environment.'
    },
    {
      step: 4,
      title: 'Precision Manufacturing',
      description: 'Your bathroom cabinets are custom-built by me in my workshop using moisture-resistant materials and expert craftsmanship, with attention to every detail.'
    },
    {
      step: 5,
      title: 'Professional Installation',
      description: 'I personally handle the installation and coordinate with plumbers and other trades as needed, ensuring perfect integration and moisture protection.'
    },
    {
      step: 6,
      title: 'Final Setup & Care Instructions',
      description: 'I conduct a thorough walkthrough with you, help organize your bathroom storage, and provide personalized care instructions for your new cabinets.'
    }
  ];

  benefits = [
    'Transform your bathroom into a spa-like retreat',
    'Maximize storage in any size bathroom space',
    'Increase home value with custom bathroom cabinetry',
    'Enjoy easy maintenance with moisture-resistant finishes',
    'Organize toiletries and linens with purpose-built storage',
    'Create a calming, clutter-free bathroom environment',
    'Benefit from professional moisture protection design',
    'Get a completely personalized bathroom storage solution'
  ];

  onGetQuoteClick() {
    // Navigate to the get-started page
    this.router.navigate(['/get-started']);
  }
}
