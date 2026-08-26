import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface PantryFeature {
  title: string;
  description: string;
  icon: string;
}

interface PantryStyle {
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
  selector: 'app-pantry-cabinets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pantry-cabinets.component.html',
  styleUrl: './pantry-cabinets.component.scss'
})
export class PantryCabinetsComponent implements OnInit {
  
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
    this.title.setTitle('Custom Pantry Cabinets | Organization & Storage Solutions | Deez Cabinuts');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Transform your pantry with custom-built storage cabinets from Deez Cabinuts. Maximize organization with textured melamine finishes and personalized designs. Get your free consultation today!'
    });

    // Set additional SEO meta tags
    this.meta.updateTag({ name: 'keywords', content: 'custom pantry cabinets, pantry organization, kitchen storage, pantry renovation, custom storage solutions, pantry design' });
    this.meta.updateTag({ property: 'og:title', content: 'Custom Pantry Cabinets | Organization & Storage Solutions' });
    this.meta.updateTag({ property: 'og:description', content: 'Transform your pantry with custom-built storage cabinets from Deez Cabinuts. Maximize organization with textured melamine finishes and personalized designs.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Pantry Cabinets | Organization & Storage Solutions' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Transform your pantry with custom-built storage cabinets from Deez Cabinuts. Maximize organization with textured melamine finishes and personalized designs.' });
  }

  features: PantryFeature[] = [
    {
      title: 'Maximized Storage',
      description: 'I design every inch of your pantry to maximize storage capacity with smart shelving, pull-out drawers, and vertical organization systems.',
      icon: ''
    },
    {
      title: 'Custom Organization',
      description: 'Each pantry is tailored to your specific storage needs, from bulk items to small jars, creating a place for everything.',
      icon: ''
    },
    {
      title: 'Easy Access Design',
      description: 'With my experience, I ensure every item is easily accessible with pull-out shelves, lazy Susans, and optimal height placement.',
      icon: ''
    },
    {
      title: 'Durable Construction',
      description: 'I use premium materials and textured melamine finishes that withstand daily use while maintaining their beautiful appearance.',
      icon: ''
    },
    {
      title: 'Adjustable Systems',
      description: 'Flexible shelving and storage systems that can adapt as your storage needs change over time.',
      icon: ''
    },
    {
      title: 'Professional Installation',
      description: 'I personally handle every aspect of installation to ensure perfect fit and functionality in your space.',
      icon: ''
    }
  ];

  pantryStyles: PantryStyle[] = [
    {
      name: 'Walk-In Pantry',
      description: 'Complete pantry room transformation with floor-to-ceiling storage, organized zones, and easy navigation.',
      features: [
        'Floor-to-ceiling storage systems',
        'Multiple storage zones for different items',
        'Central island or counter space',
        'Integrated lighting solutions',
        'Easy-access door and drawer systems'
      ]
    },
    {
      name: 'Reach-In Pantry',
      description: 'Maximize smaller pantry spaces with intelligent vertical storage and pull-out accessibility features.',
      features: [
        'Vertical storage maximization',
        'Pull-out drawers and shelves',
        'Door-mounted storage systems',
        'Adjustable shelf configurations',
        'Corner space optimization'
      ]
    },
    {
      name: 'Butler\'s Pantry',
      description: 'Elegant storage solution between kitchen and dining areas with both functional storage and serving capabilities.',
      features: [
        'Combination storage and serving area',
        'Wine and beverage storage',
        'Small appliance organization',
        'Elegant finishing for entertaining',
        'Counter space for preparation'
      ]
    },
    {
      name: 'Corner Pantry',
      description: 'Innovative corner solutions that transform unused spaces into highly functional storage areas.',
      features: [
        'Space-efficient corner design',
        'Rotating lazy Susan systems',
        'Angled shelving for accessibility',
        'Maximized vertical space',
        'Custom door configurations'
      ]
    }
  ];

  materials = [
    {
      name: 'Solid Hardwood',
      description: 'Premium solid wood construction for lasting durability and natural beauty in your pantry.',
      benefits: ['Natural wood beauty', 'Long-lasting durability', 'Can be refinished over time', 'Unique grain patterns']
    },
    {
      name: 'Engineered Wood with Textured Melamine',
      description: 'Modern engineered substrates with cutting-edge textured melamine surfaces for superior performance and contemporary style.',
      benefits: ['Superior scratch and moisture resistance', 'Easy maintenance and cleaning', 'Contemporary textured finishes', 'Consistent quality and appearance', 'Environmentally responsible options']
    }
  ];

  organizationFeatures = [
    'Adjustable shelving systems for items of all sizes',
    'Pull-out drawers for easy access to deep storage',
    'Lazy Susan systems for corner space utilization',
    'Door-mounted racks and spice storage',
    'Wire basket systems for produce and bulk items',
    'Dedicated zones for different food categories',
    'Soft-close hinges and drawer slides',
    'Custom dividers and organizers',
    'Under-shelf lighting options',
    'Ventilation systems for fresh storage'
  ];

  finishOptions = [
    'Textured Wood Grain Melamine (Modern Oak, Walnut, Maple patterns)',
    'Textured Stone & Concrete Effects (Industrial and contemporary looks)',
    'Textured Fabric & Linen Patterns (Soft, sophisticated textures)',
    'Smooth Solid Colors in trending hues (Matte White, Charcoal, Navy)',
    'Ultra-Matte Finishes (Fingerprint resistant and easy to clean)',
    'Two-tone combinations for visual organization',
    'Custom textured melamine options available'
  ];

  faqs: FAQ[] = [
    {
      question: 'How do you determine the best pantry layout for my space?',
      answer: 'I start by assessing your current storage needs, shopping habits, and family size. Then I measure your space and create a custom design that maximizes storage while ensuring everything is easily accessible.'
    },
    {
      question: 'Can you work with existing pantry spaces?',
      answer: 'Absolutely! I specialize in transforming existing pantries, whether it\'s a small reach-in closet or a large walk-in space. I can work around existing electrical, plumbing, and structural elements.'
    },
    {
      question: 'What\'s the difference between pantry cabinets and kitchen cabinets?',
      answer: 'Pantry cabinets are specifically designed for food storage with deeper shelves, specialized organizers, and features like pull-out drawers and lazy Susans. They\'re optimized for accessibility and organization rather than just storage.'
    },
    {
      question: 'How long does a pantry cabinet project take?',
      answer: 'Most pantry projects take 1-3 weeks depending on the size and complexity. Walk-in pantries may take longer, while simple reach-in pantry upgrades can often be completed in a few days.'
    },
    {
      question: 'Do you provide organization consultation along with the cabinets?',
      answer: 'Yes! I help you plan the organization system as part of the design process. I\'ll recommend the best storage solutions for your specific needs and show you how to maintain the organization.'
    },
    {
      question: 'Can pantry cabinets be modified later if my needs change?',
      answer: 'I design pantry systems with flexibility in mind. Most shelving is adjustable, and I can often add or modify components as your storage needs evolve over time.'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Storage Assessment',
      description: 'I start by understanding your current storage challenges, shopping habits, and family needs. We\'ll discuss your vision and I\'ll provide personalized recommendations.'
    },
    {
      step: 2,
      title: 'Space Planning & Design',
      description: 'I create detailed plans and take precise measurements of your pantry space. You\'ll receive 3D renderings to visualize your organized pantry.'
    },
    {
      step: 3,
      title: 'Organization System Selection',
      description: 'Choose from my curated selection of storage solutions, shelving systems, and textured melamine finishes. I\'ll guide you to make the perfect choices for your needs.'
    },
    {
      step: 4,
      title: 'Custom Manufacturing',
      description: 'Your pantry cabinets are custom-built by me in my workshop using premium materials and expert craftsmanship, with personal attention to every detail.'
    },
    {
      step: 5,
      title: 'Professional Installation',
      description: 'I personally handle the complete installation process, ensuring perfect fit and optimal organization with minimal disruption to your daily routine.'
    },
    {
      step: 6,
      title: 'Organization Setup',
      description: 'I conduct a thorough walkthrough with you, help set up your organization system, and provide personalized tips for maintaining your organized pantry.'
    }
  ];

  benefits = [
    'Eliminate food waste with better visibility and organization',
    'Save time with easy access to all stored items',
    'Reduce grocery shopping stress with organized inventory',
    'Increase home value with professional storage solutions',
    'Maximize storage capacity in any size space',
    'Create a system that grows with your family',
    'Enjoy a clutter-free, stress-free kitchen environment',
    'Benefit from personalized organization expertise'
  ];

  onGetQuoteClick() {
    // Navigate to the get-started page
    this.router.navigate(['/get-started']);
  }
}
