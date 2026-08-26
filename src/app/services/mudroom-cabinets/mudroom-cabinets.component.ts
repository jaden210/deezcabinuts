import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface MudroomFeature {
  title: string;
  description: string;
  icon: string;
}

interface MudroomSolution {
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
  selector: 'app-mudroom-cabinets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mudroom-cabinets.component.html',
  styleUrl: './mudroom-cabinets.component.scss'
})
export class MudroomCabinetsComponent implements OnInit {
  
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
    this.title.setTitle('Custom Mudroom Cabinets | Entryway Storage & Organization Solutions | Deez Cabinuts');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Transform your entryway with custom mudroom cabinets from Deez Cabinuts. Functional mudroom storage with cubbies, hooks, and benches designed for family organization with premium textured melamine finishes. Create an organized, welcoming entryway. Get your free consultation today!'
    });

    // Set additional SEO meta tags
    this.meta.updateTag({ name: 'keywords', content: 'custom mudroom cabinets, entryway storage, mudroom organization, mudroom cubbies, entryway cabinets, mudroom bench' });
    this.meta.updateTag({ property: 'og:title', content: 'Custom Mudroom Cabinets | Entryway Storage & Organization Solutions' });
    this.meta.updateTag({ property: 'og:description', content: 'Transform your entryway with custom mudroom cabinets from Deez Cabinuts. Functional mudroom storage with cubbies, hooks, and benches designed for family organization with premium textured melamine finishes.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Mudroom Cabinets | Entryway Storage & Organization Solutions' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Transform your entryway with custom mudroom cabinets from Deez Cabinuts. Functional mudroom storage with cubbies, hooks, and benches designed for family organization with premium textured melamine finishes.' });
  }

  features: MudroomFeature[] = [
    {
      title: 'Family-Focused Organization',
      description: 'I design every mudroom cabinet system to accommodate your family\'s daily routines, creating organized spaces that keep everyone\'s belongings accessible and organized.',
      icon: ''
    },
    {
      title: 'Moisture-Resistant Construction',
      description: 'Built to handle wet boots, damp coats, and daily moisture exposure with specially treated materials and finishes designed for entryway conditions.',
      icon: ''
    },
    {
      title: 'Multi-Functional Design',
      description: 'Integrated seating, hooks, cubbies, and storage that serve multiple purposes while maintaining a clean, organized appearance in your entryway.',
      icon: ''
    },
    {
      title: 'Individual Family Storage',
      description: 'Personalized cubbies and storage areas for each family member, ensuring everyone has their designated space for coats, shoes, bags, and personal items.',
      icon: ''
    },
    {
      title: 'Easy Maintenance Features',
      description: 'Designed for daily use with easy-clean surfaces, removable components, and thoughtful details that make maintaining organization simple and stress-free.',
      icon: ''
    },
    {
      title: 'Seasonal Adaptability',
      description: 'Flexible storage solutions that adapt to changing seasons, from winter coats and boots to summer sports equipment and outdoor gear.',
      icon: ''
    }
  ];

  mudroomSolutions: MudroomSolution[] = [
    {
      name: 'Complete Mudroom Systems',
      description: 'Comprehensive entryway solutions with integrated seating, individual cubbies, and storage for the ultimate family organization center.',
      features: [
        'Individual family member cubbies',
        'Built-in bench seating with storage',
        'Multiple hook heights for all family members',
        'Shoe storage and organization areas',
        'Upper cabinet storage for seasonal items',
        'Backpack and bag storage solutions'
      ]
    },
    {
      name: 'Compact Entryway Solutions',
      description: 'Space-efficient designs for smaller entryways that maximize storage potential without overwhelming the space.',
      features: [
        'Wall-mounted storage maximization',
        'Fold-down and multi-purpose features',
        'Vertical storage optimization',
        'Slim-profile bench and storage integration',
        'Efficient use of corner and awkward spaces',
        'Clean, streamlined aesthetic appeal'
      ]
    },
    {
      name: 'Family Activity Centers',
      description: 'Specialized mudroom storage for active families with sports equipment, outdoor gear, and seasonal activity organization.',
      features: [
        'Sports equipment racks and storage',
        'Outdoor gear organization areas',
        'Seasonal activity equipment storage',
        'Easy-access everyday item storage',
        'Activity bag and equipment cubbies',
        'Weather gear and protective equipment areas'
      ]
    },
    {
      name: 'Pet-Friendly Mudrooms',
      description: 'Thoughtful designs that include storage and organization for pet supplies, leashes, toys, and cleaning essentials.',
      features: [
        'Pet supply storage and organization',
        'Leash and collar storage hooks',
        'Pet toy and treat storage areas',
        'Easy-clean surfaces for pet messes',
        'Pet bed and blanket storage',
        'Feeding station integration options'
      ]
    }
  ];

  materials = [
    {
      name: 'Moisture-Resistant Hardwood',
      description: 'Specially treated solid wood construction designed to withstand the moisture and temperature variations common in entryway environments.',
      benefits: ['Superior moisture resistance', 'Beautiful natural appearance', 'Long-lasting durability for daily use', 'Can be refinished to maintain beauty', 'Perfect for traditional and contemporary mudrooms']
    },
    {
      name: 'Enhanced Textured Melamine',
      description: 'Advanced textured melamine surfaces specifically designed for high-traffic entryway use, offering superior durability and easy maintenance.',
      benefits: ['Exceptional moisture and scratch resistance', 'Easy cleaning and maintenance', 'Family-friendly durable surfaces', 'Consistent appearance over time', 'Perfect for busy family entryways']
    }
  ];

  designFeatures = [
    'Individual cubbies sized for each family member',
    'Multiple hook heights for children and adults',
    'Built-in bench seating with hidden storage',
    'Shoe storage with ventilation features',
    'Upper cabinet storage for seasonal items',
    'Drawer storage for small items and accessories',
    'Backpack and bag hanging areas',
    'Weather gear storage and drying areas',
    'Easy-clean floor protection features',
    'Lighting integration for functionality',
    'Pet supply storage and organization',
    'Seasonal decoration display areas'
  ];

  finishOptions = [
    'Textured Wood Grain Melamine (Warm Oak, Natural Maple patterns for welcoming entryways)',
    'Textured Stone & Concrete Effects (Modern and sophisticated entryway aesthetics)',
    'Smooth Solid Colors in family-friendly hues (Clean White, Soft Gray, Sage Green)',
    'Natural Wood Stains for traditional mudroom appeal (Medium Oak, Cherry, Weathered Pine)',
    'Ultra-Matte Finishes for easy cleaning and family-friendly maintenance',
    'Two-tone combinations for visual interest and modern mudroom design',
    'Custom textured melamine options for unique entryway aesthetics'
  ];

  faqs: FAQ[] = [
    {
      question: 'Can mudroom cabinets handle wet boots and damp clothing?',
      answer: 'Absolutely! I design mudroom storage with moisture-resistant materials and include ventilation features for wet items. The construction and finishes are specifically chosen to handle the moisture and temperature changes common in entryways.'
    },
    {
      question: 'How do you design storage for families with children of different ages?',
      answer: 'I create storage solutions with multiple hook heights, appropriately sized cubbies, and easy-access areas for different age groups. This ensures everyone from toddlers to adults can use their designated storage independently.'
    },
    {
      question: 'Can you include seating in mudroom cabinet designs?',
      answer: 'Yes! Built-in bench seating is a popular feature that I often integrate into mudroom designs. The benches can include hidden storage underneath and are positioned for convenient shoe changing and daily use.'
    },
    {
      question: 'How do you handle storage for sports equipment and outdoor gear?',
      answer: 'I design specialized storage areas for sports equipment, outdoor gear, and seasonal activities. This includes dedicated racks, hooks, and cubbies sized for specific equipment while maintaining overall organization and accessibility.'
    },
    {
      question: 'What about storage for pet supplies and accessories?',
      answer: 'I can integrate pet-friendly features including leash hooks, pet supply storage, feeding station areas, and easy-clean surfaces. The design accommodates both family and pet needs while maintaining a clean, organized appearance.'
    },
    {
      question: 'How do you ensure mudroom storage is easy to clean and maintain?',
      answer: 'I use easy-clean materials, design smooth surfaces without difficult corners, and include removable components where helpful. The finishes are chosen specifically for their ability to withstand daily cleaning and family use.'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Family & Entryway Assessment',
      description: 'I start by understanding your family\'s daily routines, storage needs, and entryway space. We\'ll discuss your organizational goals and I\'ll provide personalized recommendations for optimal mudroom functionality.'
    },
    {
      step: 2,
      title: 'Custom Design & Layout Planning',
      description: 'I create detailed plans that maximize your entryway\'s potential while accommodating your family\'s specific needs. You\'ll receive layouts showing storage zones and family organization strategies.'
    },
    {
      step: 3,
      title: 'Material & Finish Selection',
      description: 'Choose from my curated selection of family-friendly materials and durable finishes. I\'ll guide you to create solutions that withstand daily family use while maintaining beauty and functionality.'
    },
    {
      step: 4,
      title: 'Family-Focused Manufacturing',
      description: 'Your mudroom cabinets are custom-built by me in my workshop with family-specific features and entryway-appropriate construction for durability and daily functionality.'
    },
    {
      step: 5,
      title: 'Professional Installation',
      description: 'I personally handle the installation with careful attention to entryway requirements, ensuring everything is properly secured and functions perfectly for your family\'s daily routines.'
    },
    {
      step: 6,
      title: 'Organization & Family Setup',
      description: 'I can provide guidance on organizing your new mudroom and help you establish family systems that will maintain organization and efficiency for years to come.'
    }
  ];

  benefits = [
    'Create welcoming, organized entryways that make great first impressions',
    'Reduce household clutter with designated storage for everyone',
    'Establish family routines with organized, accessible storage',
    'Protect your home\'s interior from outdoor elements and mess',
    'Increase home value with custom built-in entryway features',
    'Enjoy easy maintenance with family-friendly, durable materials',
    'Experience stress-free mornings with organized, accessible storage',
    'Accommodate changing family needs with flexible storage solutions'
  ];

  onGetQuoteClick() {
    // Navigate to the get-started page
    this.router.navigate(['/get-started']);
  }
}
