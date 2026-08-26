import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface ServiceCategory {
  name: string;
  services: Service[];
}

interface Service {
  name: string;
  description: string;
  imageUrl?: string;
  route?: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  
  constructor(private router: Router) {}
  serviceCategories: ServiceCategory[] = [
    {
      name: 'Kitchen & Dining Areas',
      services: [
        {
          name: 'Kitchen Cabinets',
          description: 'Custom kitchen cabinets designed to maximize storage and enhance your cooking space with premium materials and expert craftsmanship.',
          route: '/services/kitchen-cabinets',
          imageUrl: '/assets/kitchen/complete.jpg'
        },
        {
          name: 'Pantry Cabinets',
          description: 'Organized storage solutions for your pantry with custom shelving, pull-out drawers, and efficient space utilization.',
          route: '/services/pantry-cabinets',
          imageUrl: '/assets/kitchen/kitchen.jpg'
        },
        {
          name: 'Wet Bar Cabinets',
          description: 'Elegant wet bar cabinetry perfect for entertaining, featuring specialized storage for glassware, bottles, and bar accessories.',
          route: '/services/wet-bar-cabinets',
          imageUrl: '/assets/wet-bar/wetbar.jpg'
        }
      ]
    },
    {
      name: 'Bathroom & Laundry',
      services: [
        {
          name: 'Bathroom Cabinets',
          description: 'Beautiful and functional bathroom storage solutions including vanities, medicine cabinets, and linen storage.',
          route: '/services/bathroom-cabinets',
          imageUrl: '/assets/bathroom/sink.jpg'
        },
        {
          name: 'Laundry Room Cabinets',
          description: 'Practical laundry room organization with custom cabinets for detergents, cleaning supplies, and clothing storage.',
          route: '/services/laundry-room-cabinets',
          imageUrl: '/assets/laundry/laundry.jpg'
        }
      ]
    },
    {
      name: 'Bedroom & Closet Storage',
      services: [
        {
          name: 'Walk-in Closet Systems',
          description: 'Custom walk-in closet designs with hanging rods, shelves, drawers, and accessories to organize your wardrobe efficiently.',
          route: '/services/walk-in-closet-systems',
          imageUrl: '/assets/closet/closet.jpg'
        },
        {
          name: 'Bedroom Cabinets',
          description: 'Bedroom storage solutions including nightstands, dressers, and built-in storage to keep your space organized and stylish.',
          route: '/services/bedroom-cabinets',
          imageUrl: '/assets/bedroom/master.jpg'
        }
      ]
    },
    {
      name: 'Living & Entertainment Spaces',
      services: [
        {
          name: 'Living Room Cabinetry',
          description: 'Custom living room storage solutions including built-in bookcases, entertainment units, and display cabinets.',
          route: '/services/living-room-cabinetry',
          imageUrl: '/assets/living-room/living.jpg'
        },
        {
          name: 'Entertainment Centers',
          description: 'Custom entertainment centers designed to house your TV, electronics, and media collections with style and functionality.',
          route: '/services/entertainment-centers',
          imageUrl: '/assets/entertainment/entertainment.jpg'
        },
        {
          name: 'Mantels',
          description: 'Beautiful custom mantels to enhance your fireplace and create a focal point in your living space.',
          route: '/services/mantels',
          imageUrl: '/assets/kitchen/complete2.jpg'
        },
        {
          name: 'Floating Shelves',
          description: 'Modern floating shelves for displaying decor, books, and personal items while maintaining a clean aesthetic.',
          route: '/services/floating-shelves',
          imageUrl: '/assets/floating-shelves/shelves.jpg'
        }
      ]
    },
    {
      name: 'Home Office & Workspace',
      services: [
        {
          name: 'Home Office Cabinets',
          description: 'Professional home office storage solutions including filing cabinets, desk organizers, and built-in storage systems.',
          route: '/services/home-office-cabinets',
          imageUrl: '/assets/home-office/desk.jpg'
        }
      ]
    },
    {
      name: 'Garage & Utility Storage',
      services: [
        {
          name: 'Garage Storage Solutions',
          description: 'Comprehensive garage organization with custom cabinets, workbenches, and storage systems to maximize your garage space.',
          route: '/services/garage-storage-solutions',
          imageUrl: '/assets/kitchen/ready.jpg'
        },
        {
          name: 'Mudroom Cabinets',
          description: 'Functional mudroom storage with custom cabinets, cubbies, and hooks to keep your entryway organized and clutter-free.',
          route: '/services/mudroom-cabinets',
          imageUrl: '/assets/mudroom/mud.jpg'
        }
      ]
    },
    {
      name: 'Full-Home Services',
      services: [
        {
          name: 'New Construction Cabinetry',
          description: 'Complete cabinetry solutions for new home construction, ensuring every room has the perfect storage and style.',
          route: '/services/new-construction-cabinetry',
          imageUrl: '/assets/construction/shop.jpg'
        },
        {
          name: 'Home Renovation Cabinet Services',
          description: 'Comprehensive cabinet renovation services to transform your existing space with modern, functional, and beautiful cabinetry.',
          route: '/services/home-renovation-cabinet-services',
          imageUrl: '/assets/renovation/fire.jpg'
        }
      ]
    }
  ];

  onServiceClick(service: Service) {
    console.log('Service clicked:', service.name);
    
    // If service has a route, navigate to it
    if (service.route) {
      console.log('Navigating to:', service.route);
      this.router.navigate([service.route]).then(
        success => console.log('Navigation successful:', success),
        error => console.error('Navigation failed:', error)
      );
    } else {
      // For other services not yet implemented, show coming soon
      console.log('Service detail page coming soon:', service.name);
      alert(`${service.name} detail page coming soon!`);
    }
  }
}

