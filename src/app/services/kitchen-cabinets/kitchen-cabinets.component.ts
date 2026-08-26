import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface KitchenCabinetFeature {
  title: string;
  description: string;
  icon: string;
}

interface KitchenCabinetStyle {
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
  selector: 'app-kitchen-cabinets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen-cabinets.component.html',
  styleUrl: './kitchen-cabinets.component.scss'
})
export class KitchenCabinetsComponent implements OnInit {
  
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
    this.title.setTitle('Custom Kitchen Cabinets | Premium Cabinetry Design & Installation | Deez Cabinuts');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Transform your kitchen with custom-built cabinets from Deez Cabinuts. Premium materials, expert craftsmanship, and personalized designs. Get your free consultation today!'
    });

    // Set additional SEO meta tags
    this.meta.updateTag({ name: 'keywords', content: 'custom kitchen cabinets, kitchen cabinet installation, premium cabinetry, kitchen renovation, custom kitchen design, cabinet makers' });
    this.meta.updateTag({ property: 'og:title', content: 'Custom Kitchen Cabinets | Premium Cabinetry Design & Installation' });
    this.meta.updateTag({ property: 'og:description', content: 'Transform your kitchen with custom-built cabinets from Deez Cabinuts. Premium materials, expert craftsmanship, and personalized designs.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Custom Kitchen Cabinets | Premium Cabinetry Design & Installation' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Transform your kitchen with custom-built cabinets from Deez Cabinuts. Premium materials, expert craftsmanship, and personalized designs.' });
  }

  features: KitchenCabinetFeature[] = [
    {
      title: 'Custom Design',
      description: 'Every cabinet is designed specifically for your space, style preferences, and functional needs.',
      icon: ''
    },
    {
      title: 'Premium Materials',
      description: 'I use only the finest hardwoods, engineered wood, and hardware for lasting beauty and durability.',
      icon: ''
    },
    {
      title: 'Expert Craftsmanship',
      description: 'With my skilled hands and attention to detail, I ensure precision construction and flawless finishing on every project.',
      icon: ''
    },
    {
      title: 'Soft-Close Hardware',
      description: 'All cabinets feature premium soft-close hinges and drawer slides for smooth, quiet operation.',
      icon: ''
    },
    {
      title: 'Warranty Protection',
      description: 'Comprehensive warranty coverage on all materials and workmanship for your peace of mind.',
      icon: ''
    },
    {
      title: 'Personal Installation',
      description: 'I personally handle the installation to ensure perfect fit and finish with minimal disruption to your home.',
      icon: ''
    }
  ];

  cabinetStyles: KitchenCabinetStyle[] = [
    {
      name: 'Traditional Raised Panel',
      description: 'Classic elegance with raised center panels and decorative trim details that never go out of style.',
      features: [
        'Raised center panels',
        'Decorative crown molding',
        'Traditional hardware options',
        'Rich wood stains available',
        'Timeless design appeal'
      ]
    },
    {
      name: 'Modern Flat Panel',
      description: 'Clean, contemporary lines with flat panel doors for a sleek, minimalist aesthetic.',
      features: [
        'Flat, smooth surfaces',
        'Minimalist hardware',
        'Bold color options',
        'Handleless designs available',
        'Contemporary appeal'
      ]
    },
    {
      name: 'Shaker Style',
      description: 'The perfect blend of traditional and modern with clean lines and simple rectangular frames.',
      features: [
        'Five-piece door construction',
        'Recessed center panels',
        'Versatile design options',
        'Works with any décor style',
        'Most popular choice'
      ]
    },
    {
      name: 'Transitional',
      description: 'Sophisticated design that bridges traditional and contemporary styles for ultimate versatility.',
      features: [
        'Balanced design elements',
        'Subtle decorative details',
        'Flexible hardware choices',
        'Neutral color palettes',
        'Timeless versatility'
      ]
    }
  ];

  materials = [
    {
      name: 'Solid Hardwood',
      description: 'Premium solid wood construction using oak, maple, cherry, and other fine hardwoods.',
      benefits: ['Natural beauty', 'Long-lasting durability', 'Can be refinished', 'Unique grain patterns']
    },
    {
      name: 'Engineered Wood with Textured Melamine',
      description: 'Premium engineered substrates finished with cutting-edge textured melamine surfaces for the perfect blend of durability and modern style.',
      benefits: ['Superior scratch and moisture resistance', 'Easy maintenance and cleaning', 'Contemporary textured finishes', 'Consistent quality and appearance', 'Environmentally responsible options']
    }
  ];

  hardwareOptions = [
    'Soft-close hinges and drawer slides',
    'Pull-out shelves and drawers',
    'Lazy Susans for corner cabinets',
    'Drawer organizers and dividers',
    'Under-cabinet lighting systems',
    'Touch-latch mechanisms',
    'Adjustable shelving systems',
    'Trash pull-out systems'
  ];

  finishOptions = [
    'Textured Wood Grain Melamine (Modern Oak, Walnut, Maple patterns)',
    'Textured Stone & Concrete Effects (Industrial and contemporary looks)',
    'Textured Fabric & Linen Patterns (Soft, sophisticated textures)',
    'Smooth Solid Colors in trending hues (Matte White, Charcoal, Navy)',
    'Ultra-Matte Finishes (Fingerprint resistant and easy to clean)',
    'Two-tone textured combinations for visual depth',
    'Custom textured melamine options available'
  ];

  faqs: FAQ[] = [
    {
      question: 'How long does a kitchen cabinet project typically take?',
      answer: 'Most kitchen cabinet projects take 2-4 weeks from measurement to installation, depending on the size and complexity of your kitchen. Custom work may require additional time for design approval and manufacturing.'
    },
    {
      question: 'Do you provide design consultation services?',
      answer: 'Absolutely! I offer comprehensive design consultations to help you choose the perfect cabinet style, layout, and features for your space and lifestyle. I will work personally with you to create the kitchen of your dreams.'
    },
    {
      question: 'What is included in your cabinet installation service?',
      answer: 'My installation service includes removal of old cabinets (if needed), professional installation of new cabinets, hardware installation, and final adjustments. I also handle cleanup and disposal of packaging materials.'
    },
    {
      question: 'Can you work around existing appliances and fixtures?',
      answer: 'Absolutely! I specialize in working around existing appliances, plumbing, and electrical fixtures. I will carefully measure and design your cabinets to fit perfectly with your current setup.'
    },
    {
      question: 'What warranty do you provide on kitchen cabinets?',
      answer: 'I provide a comprehensive warranty covering materials and workmanship. Specific warranty terms vary by product line, but all my cabinets are backed by my personal commitment to quality and your complete satisfaction.'
    },
    {
      question: 'Do you offer financing options?',
      answer: 'Yes, I offer flexible financing options to help make your dream kitchen more affordable. Contact me to learn about current financing programs and payment plans.'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'I start with a detailed consultation to understand your needs, style preferences, and budget. We\'ll discuss your vision and I\'ll provide personalized recommendations.'
    },
    {
      step: 2,
      title: 'Design & Measurement',
      description: 'I create detailed plans and take precise measurements of your space. You\'ll receive 3D renderings to visualize your new kitchen.'
    },
    {
      step: 3,
      title: 'Material Selection',
      description: 'Choose from my curated selection of materials, finishes, and hardware options. I\'ll provide samples and guide you to make the perfect choices for your space.'
    },
    {
      step: 4,
      title: 'Handcrafted Manufacturing',
      description: 'Your cabinets are custom-built by me in my workshop using premium materials and expert craftsmanship, with personal attention to every detail.'
    },
    {
      step: 5,
      title: 'Personal Installation',
      description: 'I personally handle the complete installation process, ensuring perfect fit and finish with minimal disruption to your daily routine.'
    },
    {
      step: 6,
      title: 'Final Walkthrough',
      description: 'I conduct a thorough walkthrough with you to ensure your complete satisfaction and provide personalized care instructions for your new cabinets.'
    }
  ];

  benefits = [
    'Increase home value with custom cabinetry',
    'Maximize storage efficiency in your kitchen',
    'Create a personalized design that reflects your style',
    'Enjoy premium materials and expert craftsmanship',
    'Benefit from professional design consultation',
    'Receive comprehensive warranty protection',
    'Experience minimal disruption during installation',
    'Get ongoing support and maintenance guidance'
  ];

  onGetQuoteClick() {
    // Navigate to the get-started page
    this.router.navigate(['/get-started']);
  }
}
