import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface GarageFeature {
  title: string;
  description: string;
  icon: string;
}

interface GarageSolution {
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
  selector: 'app-garage-storage-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './garage-storage-solutions.component.html',
  styleUrl: './garage-storage-solutions.component.scss'
})
export class GarageStorageSolutionsComponent implements OnInit {
  
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
    this.title.setTitle('Custom Garage Storage Solutions | Organized Garage Cabinets & Shelving | Deez Cabinuts');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Transform your garage with custom storage solutions from Deez Cabinuts. Professional garage cabinets, workbenches, and organization systems designed for durability with premium textured melamine finishes. Maximize your garage space efficiently. Get your free consultation today!'
    });

    // Set additional SEO meta tags
    this.meta.updateTag({ name: 'keywords', content: 'custom garage storage, garage cabinets, garage organization, workbench cabinets, garage shelving systems, utility storage' });
    this.meta.updateTag({ property: 'og:title', content: 'Custom Garage Storage Solutions | Organized Garage Cabinets & Shelving' });
    this.meta.updateTag({ property: 'og:description', content: 'Transform your garage with custom storage solutions from Deez Cabinuts. Professional garage cabinets, workbenches, and organization systems designed for durability with premium textured melamine finishes.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Garage Storage Solutions | Organized Garage Cabinets & Shelving' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Transform your garage with custom storage solutions from Deez Cabinuts. Professional garage cabinets, workbenches, and organization systems designed for durability with premium textured melamine finishes.' });
  }

  features: GarageFeature[] = [
    {
      title: 'Maximum Space Utilization',
      description: 'I design every garage storage system to utilize every inch of available space, creating organized solutions that transform cluttered garages into functional storage areas.',
      icon: ''
    },
    {
      title: 'Heavy-Duty Construction',
      description: 'Built to handle the demands of garage environments with robust materials and reinforced construction that supports heavy tools, equipment, and seasonal items.',
      icon: ''
    },
    {
      title: 'Weather-Resistant Design',
      description: 'Specially designed to withstand garage conditions including temperature fluctuations, humidity, and occasional moisture exposure while maintaining functionality.',
      icon: ''
    },
    {
      title: 'Flexible Organization',
      description: 'Modular systems that adapt to your changing storage needs, from seasonal items and sports equipment to tools and automotive supplies.',
      icon: ''
    },
    {
      title: 'Easy Access Design',
      description: 'Thoughtfully planned storage that keeps frequently used items easily accessible while maximizing storage capacity for occasional-use items.',
      icon: ''
    },
    {
      title: 'Integrated Workspaces',
      description: 'Custom workbench integration and project areas that create functional workshop spaces alongside organized storage solutions.',
      icon: ''
    }
  ];

  garageSolutions: GarageSolution[] = [
    {
      name: 'Complete Garage Organization Systems',
      description: 'Comprehensive garage transformations with wall-to-wall storage, overhead systems, and integrated workspaces for maximum organization.',
      features: [
        'Floor-to-ceiling storage maximization',
        'Overhead storage for seasonal items',
        'Integrated workbench and tool organization',
        'Automotive supply and equipment storage',
        'Sports and recreation equipment areas',
        'Seasonal decoration and storage solutions'
      ]
    },
    {
      name: 'Workshop & Hobby Storage',
      description: 'Specialized storage systems for workshops, crafts, and hobbies with tool organization, project storage, and work surface integration.',
      features: [
        'Precision tool organization and display',
        'Project material storage and accessibility',
        'Workbench integration with storage underneath',
        'Hardware and fastener organization systems',
        'Power tool storage and charging stations',
        'Work-in-progress project storage areas'
      ]
    },
    {
      name: 'Family Activity Centers',
      description: 'Family-focused garage storage for sports equipment, outdoor gear, and seasonal items with easy access for all family members.',
      features: [
        'Sports equipment racks and storage',
        'Outdoor gear and camping equipment areas',
        'Bicycle storage and maintenance areas',
        'Children\'s toy and equipment organization',
        'Gardening supply storage and potting areas',
        'Pool and patio furniture storage'
      ]
    },
    {
      name: 'Utility & Maintenance Storage',
      description: 'Practical storage solutions for home maintenance, utilities, and emergency supplies with secure and organized access.',
      features: [
        'Home maintenance tool organization',
        'Cleaning supply storage and access',
        'Emergency preparedness supply storage',
        'Utility and service item organization',
        'Paint and chemical safe storage',
        'Bulk item and household supply storage'
      ]
    }
  ];

  materials = [
    {
      name: 'Marine-Grade Engineered Wood',
      description: 'Specially treated engineered wood materials designed to withstand garage environments with superior moisture resistance and durability.',
      benefits: ['Superior moisture and humidity resistance', 'Temperature fluctuation tolerance', 'Heavy-duty load bearing capacity', 'Long-lasting performance in garage conditions', 'Professional appearance that resists wear']
    },
    {
      name: 'Textured Melamine with Enhanced Durability',
      description: 'Advanced textured melamine surfaces specifically designed for utility environments, offering easy maintenance and resistance to garage conditions.',
      benefits: ['Easy cleaning and maintenance', 'Scratch and impact resistance', 'Chemical and stain resistance', 'Consistent appearance over time', 'Perfect for high-use garage applications']
    }
  ];

  designFeatures = [
    'Heavy-duty hanging rod systems for tools and equipment',
    'Adjustable shelving for varying item sizes and weights',
    'Closed cabinet storage for security and dust protection',
    'Open shelving for easy access to frequently used items',
    'Overhead storage systems for seasonal and bulk items',
    'Workbench integration with tool organization',
    'Pegboard and hook systems for versatile hanging storage',
    'Drawer systems for small parts and hardware organization',
    'Ventilation considerations for stored items',
    'Lighting integration for improved visibility',
    'Floor protection and easy cleaning features',
    'Modular design for future reconfiguration'
  ];

  finishOptions = [
    'Textured Industrial Melamine (Concrete Gray, Steel Blue, Charcoal patterns for garage durability)',
    'Textured Wood Grain Melamine (Natural Oak, Rustic Pine patterns for warmer garage aesthetics)',
    'Smooth Solid Colors in utility hues (Classic White, Light Gray, Sage Green)',
    'Heavy-Duty Laminate Finishes designed for garage environments and easy maintenance',
    'Ultra-Matte Finishes for easy cleaning and resistance to garage dust and debris',
    'Two-tone combinations for visual organization and modern garage design',
    'Custom textured melamine options for unique garage storage aesthetics'
  ];

  faqs: FAQ[] = [
    {
      question: 'Can garage storage cabinets handle heavy tools and equipment?',
      answer: 'Absolutely! I design garage storage systems with heavy-duty construction and reinforced shelving that can safely support power tools, automotive equipment, and heavy seasonal items. Load ratings are carefully calculated for each application.'
    },
    {
      question: 'How do you protect garage storage from moisture and temperature changes?',
      answer: 'I use specially treated materials designed for garage environments, including moisture-resistant finishes and construction techniques that account for temperature fluctuations. Proper ventilation and drainage considerations are also incorporated.'
    },
    {
      question: 'Can you design storage that works around garage door mechanisms?',
      answer: 'Yes! I carefully plan around garage door tracks, openers, and safety systems. The design ensures full functionality of your garage door while maximizing available storage space around these mechanical systems.'
    },
    {
      question: 'What about organizing different types of items like tools, sports equipment, and seasonal decorations?',
      answer: 'I create zone-based organization systems with specialized storage for different item categories. This includes tool organization, sports equipment racks, seasonal storage areas, and family activity centers, all designed for easy access and maximum efficiency.'
    },
    {
      question: 'Can garage storage systems include workspace areas?',
      answer: 'Absolutely! I often integrate workbenches, project areas, and hobby spaces into garage storage designs. These can include tool organization, work surfaces, and specialized storage for workshop materials and projects.'
    },
    {
      question: 'How do you ensure garage storage is secure for valuable items?',
      answer: 'I can incorporate lockable cabinets, secure storage areas, and enclosed systems for valuable tools and equipment. The design balances security needs with accessibility for daily use items.'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Garage Assessment & Planning',
      description: 'I start by evaluating your garage space, storage needs, and usage patterns. We\'ll discuss your goals and I\'ll provide personalized recommendations for optimal garage organization.'
    },
    {
      step: 2,
      title: 'Custom Design & Layout',
      description: 'I create detailed plans that maximize your garage\'s potential while working around existing systems. You\'ll receive layouts showing storage zones and organization strategies.'
    },
    {
      step: 3,
      title: 'Material & Finish Selection',
      description: 'Choose from my curated selection of garage-appropriate materials and durable finishes. I\'ll guide you to create solutions that withstand garage conditions while looking great.'
    },
    {
      step: 4,
      title: 'Heavy-Duty Manufacturing',
      description: 'Your garage storage system is custom-built by me in my workshop with reinforced construction and garage-specific features for durability and functionality.'
    },
    {
      step: 5,
      title: 'Professional Installation',
      description: 'I personally handle the installation with careful attention to garage systems, ensuring everything is properly anchored and functions perfectly with your existing setup.'
    },
    {
      step: 6,
      title: 'Organization & Setup',
      description: 'I can provide guidance on organizing your newly transformed garage and help you establish systems that will maintain organization and efficiency long-term.'
    }
  ];

  benefits = [
    'Transform cluttered garages into organized, functional spaces',
    'Maximize storage capacity with vertical and overhead solutions',
    'Create dedicated zones for tools, equipment, and seasonal items',
    'Enjoy easy access to everything with thoughtful organization',
    'Increase home value with professional garage organization',
    'Protect valuable tools and equipment with secure storage',
    'Experience durable solutions built for garage environments',
    'Reclaim garage space for cars and family activities'
  ];

  onGetQuoteClick() {
    // Navigate to the get-started page
    this.router.navigate(['/get-started']);
  }
}
