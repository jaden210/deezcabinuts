import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface RenovationFeature {
  title: string;
  description: string;
  icon: string;
}

interface RenovationSolution {
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
  selector: 'app-home-renovation-cabinet-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-renovation-cabinet-services.component.html',
  styleUrl: './home-renovation-cabinet-services.component.scss'
})
export class HomeRenovationCabinetServicesComponent implements OnInit {
  
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
    this.title.setTitle('Home Renovation Cabinet Services | Kitchen & Bathroom Remodel Cabinets | Deez Cabinuts');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Transform your home with comprehensive renovation cabinet services from Deez Cabinuts. Kitchen remodels, bathroom updates, and whole-home cabinet transformations with premium textured melamine finishes. Maximize your renovation investment. Get your free consultation today!'
    });

    // Set additional SEO meta tags
    this.meta.updateTag({ name: 'keywords', content: 'home renovation cabinets, kitchen remodel cabinets, bathroom renovation, cabinet renovation services, home remodeling' });
    this.meta.updateTag({ property: 'og:title', content: 'Home Renovation Cabinet Services | Kitchen & Bathroom Remodel Cabinets' });
    this.meta.updateTag({ property: 'og:description', content: 'Transform your home with comprehensive renovation cabinet services from Deez Cabinuts. Kitchen remodels, bathroom updates, and whole-home cabinet transformations with premium textured melamine finishes.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Home Renovation Cabinet Services | Kitchen & Bathroom Remodel Cabinets' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Transform your home with comprehensive renovation cabinet services from Deez Cabinuts. Kitchen remodels, bathroom updates, and whole-home cabinet transformations with premium textured melamine finishes.' });
  }

  features: RenovationFeature[] = [
    {
      title: 'Renovation Expertise',
      description: 'I bring extensive experience in home renovation projects, understanding the unique challenges and opportunities that come with transforming existing spaces.',
      icon: ''
    },
    {
      title: 'Existing Space Optimization',
      description: 'Specialized in maximizing the potential of existing spaces, working within current layouts while dramatically improving functionality and aesthetics.',
      icon: ''
    },
    {
      title: 'Renovation Coordination',
      description: 'Seamless coordination with other renovation trades including plumbers, electricians, and contractors to ensure your cabinet project integrates perfectly.',
      icon: ''
    },
    {
      title: 'Budget-Conscious Solutions',
      description: 'Creating maximum impact within renovation budgets, offering solutions that deliver the best value and transformation for your investment.',
      icon: ''
    },
    {
      title: 'Minimal Disruption',
      description: 'Renovation processes designed to minimize disruption to your daily life, with efficient timelines and careful protection of existing finishes.',
      icon: ''
    },
    {
      title: 'Style Transformation',
      description: 'Complete aesthetic transformations that modernize your home while respecting its character and your personal style preferences.',
      icon: ''
    }
  ];

  renovationSolutions: RenovationSolution[] = [
    {
      name: 'Complete Kitchen Renovations',
      description: 'Full kitchen transformations that modernize layout, increase storage, and create the heart of your home you\'ve always wanted.',
      features: [
        'Complete cabinet replacement and layout optimization',
        'Modern storage solutions and organization systems',
        'Integration with new appliances and fixtures',
        'Countertop and backsplash coordination',
        'Lighting and electrical coordination',
        'Style transformation from traditional to contemporary'
      ]
    },
    {
      name: 'Bathroom Renovation Projects',
      description: 'Bathroom transformations that maximize space, improve functionality, and create spa-like retreats in your home.',
      features: [
        'Vanity replacement and storage optimization',
        'Space-efficient storage solutions',
        'Moisture-resistant materials and finishes',
        'Modern fixture and plumbing coordination',
        'Lighting and ventilation integration',
        'Luxury finishes and contemporary aesthetics'
      ]
    },
    {
      name: 'Whole-Home Cabinet Updates',
      description: 'Comprehensive home renovation projects that create consistent style and improved functionality throughout multiple rooms.',
      features: [
        'Consistent design theme throughout the home',
        'Room-by-room renovation coordination',
        'Storage optimization in every space',
        'Modern convenience and technology integration',
        'Phased renovation scheduling for occupied homes',
        'Complete home value enhancement'
      ]
    },
    {
      name: 'Specialty Space Renovations',
      description: 'Focused renovations for specific areas like mudrooms, laundry rooms, home offices, and entertainment spaces.',
      features: [
        'Targeted space transformation and optimization',
        'Specific functional requirement solutions',
        'Integration with existing home systems',
        'Budget-focused renovation solutions',
        'Minimal disruption specialty projects',
        'Custom solutions for unique spaces'
      ]
    }
  ];

  materials = [
    {
      name: 'Renovation-Ready Hardwood',
      description: 'Premium hardwood materials selected specifically for renovation environments, offering superior quality that transforms existing spaces.',
      benefits: ['Dramatic visual transformation', 'Superior quality that enhances home value', 'Timeless appeal that works with any renovation style', 'Can be refinished for future updates', 'Perfect for both traditional and modern renovations']
    },
    {
      name: 'Advanced Textured Melamine for Renovations',
      description: 'Contemporary textured melamine surfaces ideal for renovation projects, offering modern aesthetics with practical benefits for busy households.',
      benefits: ['Contemporary style that modernizes any space', 'Easy maintenance for busy renovated homes', 'Superior durability for long-term renovation value', 'Consistent quality that looks great for years', 'Perfect for modern renovation aesthetics']
    }
  ];

  designFeatures = [
    'Existing space analysis and optimization planning',
    'Integration with current home systems and infrastructure',
    'Renovation timeline coordination and phasing',
    'Dust control and home protection during renovation',
    'Electrical and plumbing coordination for renovations',
    'Structural assessment and load consideration',
    'Building permit and code compliance assistance',
    'Value engineering for maximum renovation impact',
    'Style coordination with existing home architecture',
    'Budget optimization and cost-effective solutions',
    'Minimal disruption renovation scheduling',
    'Quality assurance throughout renovation process'
  ];

  finishOptions = [
    'Textured Wood Grain Melamine (Modern Oak, Contemporary Walnut, Fresh Maple patterns for renovation updates)',
    'Textured Stone & Concrete Effects (Industrial and sophisticated renovation aesthetics)',
    'Smooth Solid Colors in updated hues (Fresh White, Modern Gray, Sophisticated Navy)',
    'Natural Wood Stains for renovation appeal (Rich Cherry, Updated Oak, Contemporary Espresso)',
    'Ultra-Matte Finishes for modern renovation aesthetics and easy maintenance',
    'Two-tone combinations for dramatic renovation transformations',
    'Custom textured melamine options for unique renovation aesthetics'
  ];

  faqs: FAQ[] = [
    {
      question: 'How do you minimize disruption during home renovation projects?',
      answer: 'I plan renovation projects with careful scheduling and phasing to minimize disruption to your daily life. This includes dust protection systems, efficient work schedules, and coordination with other trades to complete work as quickly as possible while maintaining quality.'
    },
    {
      question: 'Can you work within existing kitchen layouts for renovations?',
      answer: 'Absolutely! I specialize in optimizing existing layouts to maximize functionality and storage. While I can also help with layout changes, many stunning transformations can be achieved by working within current footprints, which often saves time and budget.'
    },
    {
      question: 'How do you coordinate with other renovation contractors?',
      answer: 'I work closely with your general contractor, plumber, electrician, and other trades to ensure seamless integration. This includes providing detailed plans, coordinating timing, and maintaining communication throughout the renovation process.'
    },
    {
      question: 'What\'s the typical timeline for a kitchen renovation cabinet project?',
      answer: 'Kitchen cabinet renovations typically take 2-4 weeks from template to installation, depending on complexity. The overall kitchen renovation timeline depends on the scope of work with other trades, but I coordinate to ensure cabinet installation fits seamlessly into your overall schedule.'
    },
    {
      question: 'Can renovation projects be done in phases for occupied homes?',
      answer: 'Yes! I understand families need to continue living in their homes during renovations. I can phase projects to maintain functionality in essential areas like kitchens and bathrooms, working around your family\'s needs and schedules.'
    },
    {
      question: 'How do you ensure renovation cabinets match existing home style?',
      answer: 'I carefully assess your home\'s existing architecture and style, then create cabinet designs that either complement the current aesthetic or help achieve your desired style transformation. This ensures a cohesive look that enhances your home\'s overall appeal.'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Renovation Assessment & Planning',
      description: 'I begin by evaluating your existing space, understanding your renovation goals, and assessing structural and systems considerations. We\'ll discuss your vision and budget for the transformation.'
    },
    {
      step: 2,
      title: 'Design & Renovation Strategy',
      description: 'I create detailed renovation plans that optimize your existing space while achieving your style and functionality goals. You\'ll receive plans showing the complete transformation.'
    },
    {
      step: 3,
      title: 'Material Selection & Coordination',
      description: 'Choose from my renovation-appropriate materials and finishes that work within your timeline and budget. I\'ll coordinate with other trades to ensure seamless integration.'
    },
    {
      step: 4,
      title: 'Renovation-Coordinated Manufacturing',
      description: 'Your cabinets are manufactured to renovation specifications and timelines, ensuring everything is ready for installation at the optimal point in your renovation schedule.'
    },
    {
      step: 5,
      title: 'Professional Renovation Installation',
      description: 'I coordinate with your renovation team to ensure seamless installation that integrates perfectly with other trades while maintaining quality and timeline commitments.'
    },
    {
      step: 6,
      title: 'Final Quality & Renovation Completion',
      description: 'Complete quality inspection, final adjustments, and coordination with other trades to ensure your renovation transformation exceeds expectations.'
    }
  ];

  benefits = [
    'Transform your existing home into your dream space',
    'Maximize renovation investment with custom storage solutions',
    'Enjoy seamless coordination with other renovation trades',
    'Experience minimal disruption with efficient renovation processes',
    'Increase home value with high-quality cabinet transformations',
    'Create modern functionality while respecting home character',
    'Benefit from renovation expertise and problem-solving experience',
    'Achieve dramatic transformation within renovation budgets'
  ];

  onGetQuoteClick() {
    // Navigate to the get-started page
    this.router.navigate(['/get-started']);
  }
}
