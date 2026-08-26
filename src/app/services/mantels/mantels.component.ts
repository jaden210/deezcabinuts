import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface MantelFeature {
  title: string;
  description: string;
  icon: string;
}

interface MantelStyle {
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
  selector: 'app-mantels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mantels.component.html',
  styleUrl: './mantels.component.scss'
})
export class MantelsComponent implements OnInit {
  
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
    this.title.setTitle('Custom Mantels | Fireplace Mantels & Surrounds | Deez Cabinuts');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Transform your fireplace with custom mantels from Deez Cabinuts. Beautiful fireplace mantels and surrounds with sophisticated textured melamine and hardwood finishes. Create the perfect focal point for your living space. Get your free consultation today!'
    });

    // Set additional SEO meta tags
    this.meta.updateTag({ name: 'keywords', content: 'custom mantels, fireplace mantels, mantel installation, fireplace surrounds, custom fireplace design, living room focal points' });
    this.meta.updateTag({ property: 'og:title', content: 'Custom Mantels | Fireplace Mantels & Surrounds' });
    this.meta.updateTag({ property: 'og:description', content: 'Transform your fireplace with custom mantels from Deez Cabinuts. Beautiful fireplace mantels and surrounds with sophisticated textured melamine and hardwood finishes.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Mantels | Fireplace Mantels & Surrounds' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Transform your fireplace with custom mantels from Deez Cabinuts. Beautiful fireplace mantels and surrounds with sophisticated textured melamine and hardwood finishes.' });
  }

  features: MantelFeature[] = [
    {
      title: 'Architectural Integration',
      description: 'I design every mantel to integrate perfectly with your home\'s architecture and existing décor, creating a seamless, built-in appearance that enhances your space.',
      icon: ''
    },
    {
      title: 'Custom Proportions',
      description: 'Each mantel is precisely sized for your specific fireplace dimensions and room scale, ensuring perfect visual balance and proportion.',
      icon: ''
    },
    {
      title: 'Material Excellence',
      description: 'I use only premium materials that can withstand the heat and environmental changes near fireplaces while maintaining beauty over time.',
      icon: ''
    },
    {
      title: 'Style Versatility',
      description: 'From traditional to contemporary designs, I create mantels that perfectly complement your interior design style and personal preferences.',
      icon: ''
    },
    {
      title: 'Functional Design',
      description: 'Beyond beauty, I incorporate practical features like display shelving, hidden storage, and cable management for modern fireplace technology.',
      icon: ''
    },
    {
      title: 'Expert Installation',
      description: 'I personally handle the installation with proper safety considerations, ensuring your mantel is securely mounted and beautifully finished.',
      icon: ''
    }
  ];

  mantelStyles: MantelStyle[] = [
    {
      name: 'Traditional Fireplace Mantels',
      description: 'Classic mantel designs with rich details, crown moldings, and timeless proportions that create elegant focal points.',
      features: [
        'Detailed crown molding and trim work',
        'Classic proportions and symmetry',
        'Rich wood grain and traditional finishes',
        'Decorative corbels and pilasters',
        'Integrated display shelving',
        'Timeless design appeal'
      ]
    },
    {
      name: 'Contemporary Floating Mantels',
      description: 'Sleek, modern mantels with clean lines and minimalist aesthetics that complement contemporary home designs.',
      features: [
        'Clean, geometric lines',
        'Floating shelf appearance',
        'Hidden mounting systems',
        'Modern material finishes',
        'Integrated lighting options',
        'Space-efficient design'
      ]
    },
    {
      name: 'Rustic & Farmhouse Mantels',
      description: 'Warm, inviting mantels with natural wood textures and rustic charm that create cozy gathering spaces.',
      features: [
        'Natural wood grain emphasis',
        'Rustic hardware and details',
        'Reclaimed wood aesthetics',
        'Farmhouse-style proportions',
        'Distressed finish options',
        'Cozy, welcoming appeal'
      ]
    },
    {
      name: 'Built-in Entertainment Mantels',
      description: 'Comprehensive fireplace surrounds that integrate entertainment systems with traditional mantel beauty.',
      features: [
        'TV mounting and integration',
        'Component storage compartments',
        'Cable management systems',
        'Surround sound accommodation',
        'Remote control storage',
        'Multi-functional design'
      ]
    }
  ];

  materials = [
    {
      name: 'Solid Hardwood',
      description: 'Premium hardwood construction that provides the beauty, durability, and heat resistance needed for fireplace applications.',
      benefits: ['Natural beauty and grain character', 'Excellent heat resistance', 'Long-lasting durability', 'Can be refinished over time', 'Traditional craftsmanship appeal']
    },
    {
      name: 'Engineered Wood with Textured Melamine',
      description: 'Modern engineered materials with sophisticated textured melamine surfaces, ideal for contemporary fireplace designs with consistent performance.',
      benefits: ['Contemporary textured finishes', 'Consistent appearance quality', 'Easy cleaning and maintenance', 'Heat-resistant properties', 'Perfect for modern fireplace aesthetics']
    }
  ];

  designFeatures = [
    'Custom sizing for perfect fireplace proportions',
    'Integrated display shelving for décor and collections',
    'Hidden cable management for electric fireplaces',
    'Heat-resistant material selection and finishes',
    'Crown molding and detailed trim work options',
    'Corbel and pilaster architectural details',
    'Floating shelf and minimalist design options',
    'Built-in lighting for ambiance and display',
    'Storage compartments for fireplace accessories',
    'Coordinated surround and hearth integration'
  ];

  finishOptions = [
    'Textured Wood Grain Melamine (Rich Oak, Cherry, Mahogany patterns for warmth)',
    'Textured Stone & Marble Effects (Elegant fireplace surrounds and accents)',
    'Smooth Solid Colors in sophisticated hues (Classic White, Warm Cream, Deep Charcoal)',
    'Natural Wood Stains highlighting grain patterns (Honey Oak, Dark Walnut, Espresso)',
    'Distressed and Aged Finishes for rustic charm (Weathered Gray, Barnwood, Vintage White)',
    'Two-tone combinations for visual interest and architectural detail',
    'Custom textured melamine options for unique fireplace designs'
  ];

  faqs: FAQ[] = [
    {
      question: 'Can mantels be installed on any type of fireplace?',
      answer: 'I can design and install mantels for most fireplace types including wood-burning, gas, electric, and decorative fireplaces. Each installation considers the specific heat requirements, clearances, and safety codes for your fireplace type.'
    },
    {
      question: 'How do you ensure proper clearances and safety for fireplace mantels?',
      answer: 'I follow all local building codes and manufacturer specifications for clearances from heat sources. This includes proper material selection, spacing requirements, and heat-resistant finishes to ensure both safety and longevity.'
    },
    {
      question: 'Can you integrate modern technology with traditional mantel designs?',
      answer: 'Absolutely! I can incorporate TV mounting, cable management, and component storage into traditional mantel designs while maintaining their classic appearance. This creates the perfect blend of functionality and timeless style.'
    },
    {
      question: 'What\'s the difference between a mantel and a full fireplace surround?',
      answer: 'A mantel is the shelf and decorative structure above the fireplace opening, while a full surround includes the mantel plus side panels and sometimes base elements. I can create either option depending on your needs and preferences.'
    },
    {
      question: 'How do you match mantels to existing room décor and architecture?',
      answer: 'I work closely with you to understand your room\'s style, existing millwork, and design preferences. I can match existing trim profiles, coordinate with built-ins, or create complementary designs that enhance your overall décor.'
    },
    {
      question: 'Can mantels include storage or display features?',
      answer: 'Yes! I often incorporate display shelving, hidden storage compartments, and even integrated lighting into mantel designs. These features add functionality while maintaining the mantel\'s aesthetic appeal and focal point status.'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Fireplace Assessment',
      description: 'I start by evaluating your fireplace, room layout, and design preferences. We\'ll discuss your style goals and I\'ll provide personalized recommendations for your perfect mantel solution.'
    },
    {
      step: 2,
      title: 'Design & Proportioning',
      description: 'I create detailed plans that ensure proper proportions, safety clearances, and architectural integration. You\'ll receive 3D renderings to visualize your custom mantel design.'
    },
    {
      step: 3,
      title: 'Material & Style Selection',
      description: 'Choose from my curated selection of premium materials and sophisticated finishes. I\'ll guide you to create the perfect combination for your fireplace and room aesthetic.'
    },
    {
      step: 4,
      title: 'Precision Crafting',
      description: 'Your mantel is custom-built by me in my workshop with meticulous attention to detail and quality construction that ensures both beauty and safety near your fireplace.'
    },
    {
      step: 5,
      title: 'Professional Installation',
      description: 'I personally handle the installation with proper mounting techniques and safety considerations, ensuring your mantel is securely attached and perfectly positioned.'
    },
    {
      step: 6,
      title: 'Finishing & Styling',
      description: 'I complete the installation with any final adjustments and can provide guidance on styling your new mantel to create the perfect focal point for your room.'
    }
  ];

  benefits = [
    'Create a stunning focal point that enhances your entire room',
    'Increase home value with custom architectural features',
    'Enjoy perfectly proportioned design for your specific space',
    'Get premium materials built to withstand fireplace environments',
    'Add functional display and storage space to your living area',
    'Integrate modern technology with traditional fireplace charm',
    'Experience professional installation with safety assurance',
    'Receive a completely personalized fireplace enhancement'
  ];

  onGetQuoteClick() {
    // Navigate to the get-started page
    this.router.navigate(['/get-started']);
  }
}
