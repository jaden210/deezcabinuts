import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface ClosetFeature {
  title: string;
  description: string;
  icon: string;
}

interface ClosetStyle {
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
  selector: 'app-walk-in-closet-systems',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './walk-in-closet-systems.component.html',
  styleUrl: './walk-in-closet-systems.component.scss'
})
export class WalkInClosetSystemsComponent implements OnInit {
  
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
    this.title.setTitle('Custom Walk-In Closet Systems | Wardrobe Organization Solutions | Deez Cabinuts');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Transform your walk-in closet with custom organization systems from Deez Cabinuts. Premium wardrobe storage, hanging rods, drawers, and shelving with textured melamine finishes. Get your free consultation today!'
    });

    // Set additional SEO meta tags
    this.meta.updateTag({ name: 'keywords', content: 'custom walk-in closets, closet organization systems, wardrobe storage, closet renovation, master bedroom closets, custom closet design' });
    this.meta.updateTag({ property: 'og:title', content: 'Custom Walk-In Closet Systems | Wardrobe Organization Solutions' });
    this.meta.updateTag({ property: 'og:description', content: 'Transform your walk-in closet with custom organization systems from Deez Cabinuts. Premium wardrobe storage, hanging rods, drawers, and shelving with textured melamine finishes.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Walk-In Closet Systems | Wardrobe Organization Solutions' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Transform your walk-in closet with custom organization systems from Deez Cabinuts. Premium wardrobe storage, hanging rods, drawers, and shelving with textured melamine finishes.' });
  }

  features: ClosetFeature[] = [
    {
      title: 'Personalized Organization',
      description: 'I design every walk-in closet system specifically for your wardrobe, lifestyle, and daily routines to create the perfect personal sanctuary.',
      icon: ''
    },
    {
      title: 'Maximize Every Inch',
      description: 'Custom solutions that make the most of your space, from floor to ceiling, ensuring no area goes unused while maintaining easy access.',
      icon: ''
    },
    {
      title: 'Premium Construction',
      description: 'Built with quality materials and precision craftsmanship that handles daily use while maintaining beauty for years to come.',
      icon: ''
    },
    {
      title: 'Flexible Systems',
      description: 'Adjustable shelving, expandable hanging areas, and modular components that adapt as your wardrobe and needs change.',
      icon: ''
    },
    {
      title: 'Luxury Aesthetics',
      description: 'Beautiful finishes and thoughtful design that transforms your closet into a boutique-like dressing experience.',
      icon: ''
    },
    {
      title: 'Smart Accessories',
      description: 'I personally select and integrate accessories like lighting, mirrors, and specialized storage to complete your perfect closet.',
      icon: ''
    }
  ];

  closetStyles: ClosetStyle[] = [
    {
      name: 'Master Suite Walk-In Closets',
      description: 'Luxurious closet systems for master bedrooms with comprehensive storage and dressing room functionality.',
      features: [
        'His and hers organization zones',
        'Island or peninsula with seating',
        'Full-length mirrors and lighting',
        'Jewelry and accessory storage',
        'Seasonal storage solutions'
      ]
    },
    {
      name: 'Compact Walk-In Solutions',
      description: 'Efficient organization systems that maximize storage potential in smaller walk-in closet spaces.',
      features: [
        'Vertical space maximization',
        'Corner utilization systems',
        'Sliding and pull-out components',
        'Multi-level hanging solutions',
        'Compact accessory storage'
      ]
    },
    {
      name: 'Boutique-Style Closets',
      description: 'High-end retail-inspired designs that showcase your wardrobe like a luxury boutique.',
      features: [
        'Display-focused design elements',
        'Premium lighting integration',
        'Glass-front storage options',
        'Specialized shoe galleries',
        'Handbag and accessory displays'
      ]
    },
    {
      name: 'Family Closet Systems',
      description: 'Organized storage solutions for shared family closets with zones for different family members.',
      features: [
        'Height-appropriate storage zones',
        'Child-friendly accessibility',
        'Growth-adaptable systems',
        'Family organization stations',
        'Shared and individual storage areas'
      ]
    }
  ];

  materials = [
    {
      name: 'Solid Hardwood',
      description: 'Premium hardwood construction that provides lasting beauty and strength for your daily wardrobe routines.',
      benefits: ['Natural beauty and warmth', 'Superior durability', 'Timeless aesthetic appeal', 'Can be refinished over time', 'Perfect for luxury closets']
    },
    {
      name: 'Engineered Wood with Textured Melamine',
      description: 'Modern engineered materials with sophisticated textured melamine surfaces, perfect for contemporary closet designs with easy maintenance.',
      benefits: ['Contemporary textured finishes', 'Easy cleaning and maintenance', 'Consistent quality appearance', 'Moisture-resistant properties', 'Perfect for modern closet aesthetics']
    }
  ];

  organizationFeatures = [
    'Adjustable shelving for folded garments and accessories',
    'Double and single hanging rod systems',
    'Deep drawers for undergarments and delicates',
    'Shoe storage racks and cubbies',
    'Handbag and purse organization',
    'Jewelry drawers with felt lining',
    'Tie and belt storage solutions',
    'Full-length mirror integration',
    'LED lighting systems for visibility',
    'Valet rods for outfit planning'
  ];

  finishOptions = [
    'Textured Wood Grain Melamine (Luxury Oak, Walnut, Cherry patterns)',
    'Textured Stone & Concrete Effects (Modern sophisticated looks)',
    'Textured Fabric & Linen Patterns (Soft, boutique-inspired textures)',
    'Smooth Solid Colors in elegant hues (Pure White, Warm Gray, Deep Navy)',
    'Ultra-Matte Finishes (Fingerprint resistant for daily use)',
    'Two-tone combinations for visual interest and zoning',
    'Custom textured melamine options for unique closet designs'
  ];

  faqs: FAQ[] = [
    {
      question: 'How do you design a closet system around my specific wardrobe?',
      answer: 'I start by evaluating your current wardrobe, daily routines, and storage challenges. We discuss your clothing types, accessories, and preferences to create a system that\'s perfectly tailored to how you actually get dressed each day.'
    },
    {
      question: 'Can walk-in closet systems be installed in any size space?',
      answer: 'Yes! I design custom solutions for spaces of all sizes, from compact walk-ins to expansive master suite closets. Every design maximizes your specific space while ensuring comfortable movement and access.'
    },
    {
      question: 'What\'s included in a complete walk-in closet system?',
      answer: 'A complete system includes all storage components (shelving, hanging rods, drawers), organizational accessories, lighting recommendations, and mirror placement. I design each element to work together as a cohesive, functional system.'
    },
    {
      question: 'How do you handle lighting and electrical in closet designs?',
      answer: 'I coordinate with electricians to ensure proper lighting placement for both functionality and ambiance. This includes overhead lighting, accent lighting for displays, and task lighting for detailed areas like jewelry storage.'
    },
    {
      question: 'Can closet systems be modified or expanded later?',
      answer: 'Absolutely! I design flexible systems with adjustable components that can be reconfigured as your needs change. Many elements can be moved, expanded, or modified without major reconstruction.'
    },
    {
      question: 'How long does a walk-in closet project typically take?',
      answer: 'Most walk-in closet projects take 1-3 weeks depending on size and complexity. This includes design, manufacturing, and installation. I work efficiently to minimize disruption to your daily routines.'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Wardrobe Assessment',
      description: 'I start by understanding your wardrobe, storage challenges, and daily dressing routines. We\'ll discuss your lifestyle and I\'ll provide personalized recommendations for optimal organization.'
    },
    {
      step: 2,
      title: 'Space Planning & Design',
      description: 'I create detailed plans that maximize your space and optimize traffic flow. You\'ll receive 3D renderings to visualize your transformed walk-in closet.'
    },
    {
      step: 3,
      title: 'System & Finish Selection',
      description: 'Choose from my curated selection of organizational components and elegant finishes. I\'ll guide you to create the perfect combination for your style and needs.'
    },
    {
      step: 4,
      title: 'Precision Manufacturing',
      description: 'Your closet system is custom-built by me in my workshop with meticulous attention to detail and quality construction throughout every component.'
    },
    {
      step: 5,
      title: 'Professional Installation',
      description: 'I personally handle the installation and coordinate with electricians for lighting, ensuring every element fits perfectly and functions beautifully.'
    },
    {
      step: 6,
      title: 'Organization & Styling',
      description: 'I help you organize your wardrobe in the new system and provide personalized tips for maintaining your perfectly organized closet.'
    }
  ];

  benefits = [
    'Transform getting dressed into a luxury experience',
    'Maximize storage capacity in your walk-in closet space',
    'Increase home value with custom closet systems',
    'Save time with efficient wardrobe organization',
    'Protect and preserve your clothing and accessories',
    'Create a beautiful, boutique-like personal space',
    'Enjoy flexible systems that adapt to changing needs',
    'Get a completely personalized storage solution'
  ];

  onGetQuoteClick() {
    // Navigate to the get-started page
    this.router.navigate(['/get-started']);
  }
}
