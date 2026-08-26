import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface ConstructionFeature {
  title: string;
  description: string;
  icon: string;
}

interface ConstructionSolution {
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
  selector: 'app-new-construction-cabinetry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-construction-cabinetry.component.html',
  styleUrl: './new-construction-cabinetry.component.scss'
})
export class NewConstructionCabinetryComponent implements OnInit {
  
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
    this.title.setTitle('New Construction Cabinetry | Custom Built-In Cabinets for New Homes | Deez Cabinuts');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Transform your new construction with custom cabinetry from Deez Cabinuts. Complete home cabinet solutions designed for builders and homeowners with premium textured melamine finishes. Maximize your new home\'s potential with expert craftsmanship. Get your free consultation today!'
    });

    // Set additional SEO meta tags
    this.meta.updateTag({ name: 'keywords', content: 'new construction cabinetry, custom cabinets new home, builder cabinetry, new home cabinets, construction cabinet installation' });
    this.meta.updateTag({ property: 'og:title', content: 'New Construction Cabinetry | Custom Built-In Cabinets for New Homes' });
    this.meta.updateTag({ property: 'og:description', content: 'Transform your new construction with custom cabinetry from Deez Cabinuts. Complete home cabinet solutions designed for builders and homeowners with premium textured melamine finishes.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'New Construction Cabinetry | Custom Built-In Cabinets for New Homes' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Transform your new construction with custom cabinetry from Deez Cabinuts. Complete home cabinet solutions designed for builders and homeowners with premium textured melamine finishes.' });
  }

  features: ConstructionFeature[] = [
    {
      title: 'Complete Home Integration',
      description: 'I design comprehensive cabinetry solutions that integrate seamlessly throughout your new construction, creating cohesive style and functionality across every room.',
      icon: ''
    },
    {
      title: 'Builder Collaboration',
      description: 'Working closely with your builder and construction team to ensure proper coordination, timing, and installation that meets construction schedules and quality standards.',
      icon: ''
    },
    {
      title: 'Construction-Ready Design',
      description: 'Detailed plans and specifications designed for new construction environments, ensuring proper fit, finish, and integration with electrical, plumbing, and HVAC systems.',
      icon: ''
    },
    {
      title: 'Value Engineering',
      description: 'Optimizing cabinet designs to maximize functionality and beauty while working within construction budgets and timelines for the best possible value.',
      icon: ''
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes that ensure every cabinet meets construction standards and your personal expectations for craftsmanship and durability.',
      icon: ''
    },
    {
      title: 'Future-Ready Features',
      description: 'Forward-thinking designs that accommodate modern living needs, technology integration, and lifestyle changes that your new home will serve for decades.',
      icon: ''
    }
  ];

  constructionSolutions: ConstructionSolution[] = [
    {
      name: 'Whole-Home Cabinet Packages',
      description: 'Comprehensive cabinetry solutions for entire new construction projects, ensuring consistent style and quality throughout every room.',
      features: [
        'Kitchen cabinet systems with island integration',
        'Bathroom vanities and storage throughout the home',
        'Mudroom and entryway organization systems',
        'Home office and study built-ins',
        'Master bedroom and walk-in closet systems',
        'Laundry room and utility storage solutions'
      ]
    },
    {
      name: 'Builder Partnership Programs',
      description: 'Specialized services for builders and contractors, offering streamlined processes, competitive pricing, and reliable delivery schedules.',
      features: [
        'Competitive builder pricing and volume discounts',
        'Streamlined design and approval processes',
        'Coordinated delivery and installation scheduling',
        'Quality assurance and warranty programs',
        'Technical support and construction coordination',
        'Flexible payment and invoicing options'
      ]
    },
    {
      name: 'Custom Homeowner Solutions',
      description: 'Personalized cabinetry design for homeowners building their dream homes, with unlimited customization and premium material options.',
      features: [
        'Unlimited design customization and personalization',
        'Premium material and finish selections',
        'Personal design consultation and planning',
        'Lifestyle-focused storage and organization',
        'Technology integration and modern conveniences',
        'Heirloom-quality craftsmanship and materials'
      ]
    },
    {
      name: 'Specialty Room Applications',
      description: 'Focused cabinetry solutions for specific rooms and applications, designed to meet the unique requirements of new construction.',
      features: [
        'Wine cellars and beverage storage systems',
        'Home theater and entertainment centers',
        'Library and study built-in systems',
        'Craft rooms and hobby space organization',
        'Garage and workshop storage solutions',
        'Guest room and multi-purpose spaces'
      ]
    }
  ];

  materials = [
    {
      name: 'Construction-Grade Hardwood',
      description: 'Premium solid wood construction specifically selected for new construction environments, offering superior durability and timeless beauty.',
      benefits: ['Construction-ready durability and stability', 'Timeless aesthetic that enhances home value', 'Superior craftsmanship quality', 'Long-term investment value', 'Perfect for high-end new construction']
    },
    {
      name: 'Advanced Textured Melamine Systems',
      description: 'State-of-the-art textured melamine surfaces designed for modern new construction, offering exceptional durability with contemporary aesthetics.',
      benefits: ['Contemporary design appeal for modern homes', 'Superior durability for long-term performance', 'Easy maintenance for busy new homeowners', 'Consistent quality and appearance', 'Perfect for contemporary new construction']
    }
  ];

  designFeatures = [
    'Whole-home design coordination and consistency',
    'Construction timeline integration and scheduling',
    'Electrical and plumbing system coordination',
    'HVAC and mechanical system integration',
    'Structural load consideration and planning',
    'Building code compliance and permitting support',
    'Quality control and construction oversight',
    'Warranty and post-construction support',
    'Value engineering and budget optimization',
    'Modern technology integration planning',
    'Future modification and expansion planning',
    'Energy efficiency and sustainability considerations'
  ];

  finishOptions = [
    'Textured Wood Grain Melamine (Contemporary Oak, Modern Walnut, Sleek Maple patterns for new homes)',
    'Textured Stone & Concrete Effects (Architectural and sophisticated new construction aesthetics)',
    'Smooth Solid Colors in modern hues (Pure White, Soft Gray, Contemporary Charcoal)',
    'Natural Wood Stains for traditional new home appeal (Rich Cherry, Natural Oak, Modern Espresso)',
    'Ultra-Matte Finishes for contemporary new home aesthetics and easy maintenance',
    'Two-tone combinations for visual depth and modern new construction design',
    'Custom textured melamine options for unique new home cabinetry aesthetics'
  ];

  faqs: FAQ[] = [
    {
      question: 'When should cabinetry be ordered for new construction projects?',
      answer: 'I recommend beginning the cabinet design and ordering process during the framing stage of construction. This allows adequate time for design, manufacturing, and ensures installation aligns perfectly with the construction timeline while accommodating any electrical or plumbing adjustments.'
    },
    {
      question: 'How do you coordinate with builders and other contractors?',
      answer: 'I work closely with your builder, electrician, and plumber to ensure proper coordination. This includes providing detailed installation drawings, coordinating rough-in requirements, and scheduling installation at the optimal point in the construction process.'
    },
    {
      question: 'Can cabinetry designs be modified during construction?',
      answer: 'Yes, within reasonable timelines. I understand that construction projects sometimes require adjustments. I work with builders and homeowners to accommodate necessary changes while maintaining quality and staying within revised budgets and schedules.'
    },
    {
      question: 'What\'s included in whole-home cabinet packages?',
      answer: 'Whole-home packages typically include kitchen cabinets, bathroom vanities, mudroom storage, home office built-ins, walk-in closets, laundry room cabinets, and any other storage needs throughout the home. Each package is customized to the specific home design and family needs.'
    },
    {
      question: 'Do you offer special pricing for builders and contractors?',
      answer: 'Yes, I offer competitive builder pricing and volume discounts for construction professionals. This includes streamlined processes, flexible scheduling, and payment terms designed to work with construction project cash flows and timelines.'
    },
    {
      question: 'How do you ensure quality during the construction process?',
      answer: 'I maintain rigorous quality control throughout manufacturing and installation. This includes regular communication with the construction team, site visits to verify measurements and installation conditions, and thorough quality inspections before and after installation.'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Construction Planning & Coordination',
      description: 'I begin by reviewing construction plans, coordinating with your builder, and understanding the project timeline. We\'ll discuss your vision and I\'ll provide recommendations for optimal cabinetry integration.'
    },
    {
      step: 2,
      title: 'Comprehensive Design Development',
      description: 'I create detailed designs that coordinate throughout your entire home, ensuring consistent style and functionality. You\'ll receive complete plans showing all cabinetry and storage solutions.'
    },
    {
      step: 3,
      title: 'Material & Finish Coordination',
      description: 'Choose from my extensive selection of construction-appropriate materials and finishes. I\'ll guide you to create cohesive selections that enhance your new home\'s overall design aesthetic.'
    },
    {
      step: 4,
      title: 'Construction-Coordinated Manufacturing',
      description: 'Your cabinets are manufactured to construction specifications and timelines, ensuring everything is ready for installation at the optimal point in your construction schedule.'
    },
    {
      step: 5,
      title: 'Professional Construction Installation',
      description: 'I coordinate closely with your construction team to ensure seamless installation that meets quality standards and construction timelines without disrupting other trades.'
    },
    {
      step: 6,
      title: 'Final Quality Assurance & Support',
      description: 'Complete quality inspection, final adjustments, and ongoing support to ensure your new home\'s cabinetry exceeds expectations and provides years of satisfaction.'
    }
  ];

  benefits = [
    'Maximize your new home\'s potential with comprehensive storage solutions',
    'Ensure cohesive design and quality throughout your entire home',
    'Benefit from construction-coordinated timing and installation',
    'Enjoy competitive pricing through efficient new construction processes',
    'Experience seamless integration with all home systems and finishes',
    'Receive warranty and support designed for new construction quality',
    'Add significant value to your new home investment',
    'Create storage solutions perfectly suited to your lifestyle from day one'
  ];

  onGetQuoteClick() {
    // Navigate to the get-started page
    this.router.navigate(['/get-started']);
  }
}
