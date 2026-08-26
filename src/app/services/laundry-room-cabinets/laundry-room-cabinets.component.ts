import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface LaundryFeature {
  title: string;
  description: string;
  icon: string;
}

interface LaundryStyle {
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
  selector: 'app-laundry-room-cabinets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './laundry-room-cabinets.component.html',
  styleUrl: './laundry-room-cabinets.component.scss'
})
export class LaundryRoomCabinetsComponent implements OnInit {
  
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
    this.title.setTitle('Custom Laundry Room Cabinets | Organization & Storage Solutions | Deez Cabinuts');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Transform your laundry room with custom cabinets from Deez Cabinuts. Efficient storage for detergents, supplies, and clothing with moisture-resistant textured melamine finishes. Get your free consultation today!'
    });

    // Set additional SEO meta tags
    this.meta.updateTag({ name: 'keywords', content: 'custom laundry room cabinets, laundry organization, utility room storage, laundry renovation, laundry room design, mudroom cabinets' });
    this.meta.updateTag({ property: 'og:title', content: 'Custom Laundry Room Cabinets | Organization & Storage Solutions' });
    this.meta.updateTag({ property: 'og:description', content: 'Transform your laundry room with custom cabinets from Deez Cabinuts. Efficient storage for detergents, supplies, and clothing with moisture-resistant textured melamine finishes.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Laundry Room Cabinets | Organization & Storage Solutions' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Transform your laundry room with custom cabinets from Deez Cabinuts. Efficient storage for detergents, supplies, and clothing with moisture-resistant textured melamine finishes.' });
  }

  features: LaundryFeature[] = [
    {
      title: 'Functional Organization',
      description: 'I design every laundry room cabinet to streamline your washing routine with dedicated storage for all your laundry essentials and supplies.',
      icon: ''
    },
    {
      title: 'Moisture-Resistant Construction',
      description: 'Using specialized materials and finishes that withstand the high humidity and temperature changes typical in laundry environments.',
      icon: ''
    },
    {
      title: 'Space Maximization',
      description: 'I make the most of every square inch, whether you have a dedicated laundry room or a compact laundry area in a closet.',
      icon: ''
    },
    {
      title: 'Multi-Purpose Design',
      description: 'Beyond laundry, I create storage solutions for cleaning supplies, household items, and seasonal goods in one organized space.',
      icon: ''
    },
    {
      title: 'Easy Access Solutions',
      description: 'Pull-out drawers, accessible shelving, and smart organization that makes laundry day efficient and stress-free.',
      icon: ''
    },
    {
      title: 'Seamless Integration',
      description: 'I personally design each laundry room to work perfectly with your appliances, plumbing, and existing home layout.',
      icon: ''
    }
  ];

  laundryStyles: LaundryStyle[] = [
    {
      name: 'Full Laundry Room Systems',
      description: 'Complete room transformation with comprehensive storage, work surfaces, and organization for dedicated laundry spaces.',
      features: [
        'Floor-to-ceiling storage maximization',
        'Built-in folding and sorting stations',
        'Appliance integration and surrounds',
        'Utility sink and counter accommodation',
        'Hanging rod and drying solutions'
      ]
    },
    {
      name: 'Compact Laundry Closets',
      description: 'Space-efficient solutions for small laundry areas, closets, and multi-purpose utility spaces.',
      features: [
        'Vertical storage optimization',
        'Stackable appliance accommodation',
        'Pull-out storage systems',
        'Compact workspace solutions',
        'Hidden storage compartments'
      ]
    },
    {
      name: 'Mudroom & Entry Storage',
      description: 'Combined laundry and entry solutions that handle both cleaning and family organization needs.',
      features: [
        'Coat and bag storage integration',
        'Shoe and boot organization',
        'Cleaning supply accessibility',
        'Seasonal item storage',
        'Family command center features'
      ]
    },
    {
      name: 'Utility & Multi-Purpose Rooms',
      description: 'Comprehensive storage for rooms that serve multiple functions beyond just laundry.',
      features: [
        'Cleaning supply organization',
        'Household item storage',
        'Workshop and craft storage',
        'Pet supply organization',
        'Emergency supply storage'
      ]
    }
  ];

  materials = [
    {
      name: 'Solid Hardwood',
      description: 'Premium hardwood construction with moisture-resistant finishes, perfect for the demanding laundry room environment.',
      benefits: ['Natural beauty and warmth', 'Superior durability', 'Moisture-resistant treatments', 'Long-lasting performance', 'Classic appearance']
    },
    {
      name: 'Engineered Wood with Textured Melamine',
      description: 'Advanced engineered materials with cutting-edge textured melamine surfaces, specifically engineered for high-humidity utility environments.',
      benefits: ['Excellent moisture and steam resistance', 'Easy cleaning and maintenance', 'Contemporary textured finishes', 'Consistent quality appearance', 'Perfect for modern utility spaces']
    }
  ];

  organizationFeatures = [
    'Deep drawers for bulk detergent and supply storage',
    'Pull-out hampers and sorting systems',
    'Adjustable shelving for varying container sizes',
    'Hanging rod systems for air-drying clothes',
    'Dedicated storage for cleaning supplies and tools',
    'Built-in ironing board storage and solutions',
    'Utility sink integration and surrounding storage',
    'Appliance garages for small laundry appliances',
    'Ventilation-friendly storage design',
    'Child-safe storage for hazardous materials'
  ];

  finishOptions = [
    'Textured Wood Grain Melamine (Utility Oak, Ash, Maple patterns)',
    'Textured Stone & Concrete Effects (Industrial and utility looks)',
    'Textured Fabric & Linen Patterns (Clean, utilitarian textures)',
    'Smooth Solid Colors in practical hues (Pure White, Light Gray, Utility Blue)',
    'Ultra-Matte Finishes (Steam-resistant and easy to clean)',
    'Two-tone combinations for visual organization',
    'Custom textured melamine options for unique utility designs'
  ];

  faqs: FAQ[] = [
    {
      question: 'How do you handle moisture and humidity in laundry room cabinets?',
      answer: 'I use moisture-resistant materials, proper ventilation design, and specialized finishes that handle the high humidity from washers, dryers, and steam. The textured melamine finishes I recommend are particularly excellent for laundry environments.'
    },
    {
      question: 'Can you work around existing appliances and plumbing?',
      answer: 'Absolutely! I specialize in designing around existing washers, dryers, utility sinks, and plumbing. I carefully measure and plan to accommodate all existing fixtures while maximizing your storage potential.'
    },
    {
      question: 'What storage solutions work best for small laundry areas?',
      answer: 'For compact spaces, I focus on vertical storage, pull-out systems, and multi-functional designs. This includes stackable storage, over-appliance cabinets, and pull-out hampers that make the most of limited space.'
    },
    {
      question: 'Do you provide solutions for laundry rooms that serve multiple purposes?',
      answer: 'Yes! Many laundry rooms also function as mudrooms, utility rooms, or craft spaces. I design comprehensive storage systems that organize everything from laundry supplies to seasonal items, cleaning products, and hobby materials.'
    },
    {
      question: 'How do you handle ventilation and safety in laundry cabinet design?',
      answer: 'I design cabinets with proper ventilation in mind, ensure safe storage for cleaning chemicals away from children, and coordinate with proper electrical and plumbing requirements for a safe, functional space.'
    },
    {
      question: 'Can laundry room cabinets match other areas of my home?',
      answer: 'Definitely! I can coordinate your laundry room cabinets with kitchen cabinets or other areas for a cohesive look throughout your home, while still optimizing the space for its specific utility functions.'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Utility Assessment',
      description: 'I start by evaluating your laundry routine, appliances, and multi-use needs. We\'ll discuss your organizational challenges and I\'ll provide personalized recommendations for maximum efficiency.'
    },
    {
      step: 2,
      title: 'Space Planning & Design',
      description: 'I create detailed plans that work around existing appliances and utilities while maximizing storage potential. You\'ll receive 3D renderings to visualize your organized laundry space.'
    },
    {
      step: 3,
      title: 'Material & Organization Selection',
      description: 'Choose from my curated selection of moisture-resistant materials and utility-focused storage solutions. I\'ll guide you to make the perfect choices for your laundry environment.'
    },
    {
      step: 4,
      title: 'Precision Manufacturing',
      description: 'Your laundry room cabinets are custom-built by me in my workshop using utility-grade materials and expert craftsmanship, designed to handle daily use.'
    },
    {
      step: 5,
      title: 'Professional Installation',
      description: 'I personally handle the installation and coordinate with any necessary utilities, ensuring perfect integration with your appliances and plumbing systems.'
    },
    {
      step: 6,
      title: 'Organization Setup',
      description: 'I conduct a thorough walkthrough with you, help set up your organizational systems, and provide personalized tips for maintaining your efficient laundry space.'
    }
  ];

  benefits = [
    'Transform laundry day from chore to efficient routine',
    'Maximize storage in any size laundry space',
    'Increase home value with organized utility areas',
    'Reduce clutter throughout your entire home',
    'Create dedicated storage for all household supplies',
    'Improve safety with proper chemical storage',
    'Enjoy easy maintenance with moisture-resistant finishes',
    'Get a completely personalized utility organization system'
  ];

  onGetQuoteClick() {
    // Navigate to the get-started page
    this.router.navigate(['/get-started']);
  }
}
