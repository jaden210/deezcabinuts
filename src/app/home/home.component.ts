import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  serviceCategories = [
    {
      title: 'Kitchen & Dining Areas',
      imageUrl: 'assets/kitchen/complete.jpg',
      routePath: '/services/kitchen-cabinets'
    },
    {
      title: 'Bathroom & Laundry',
      imageUrl: 'assets/bathroom/sink.jpg',
      routePath: '/services/bathroom-cabinets'
    },
    {
      title: 'Bedroom & Closet Storage',
      imageUrl: 'assets/closet/closet.jpg',
      routePath: '/services/walk-in-closet-systems'
    },
    {
      title: 'Living & Entertainment Spaces',
      imageUrl: 'assets/entertainment/entertainment.jpg',
      routePath: '/services/entertainment-centers'
    },
    {
      title: 'Home Office & Workspace',
      imageUrl: 'assets/home-office/desk.jpg',
      routePath: '/services/home-office-cabinets'
    },
    {
      title: 'Garage & Utility Storage',
      imageUrl: 'assets/mudroom/mud.jpg',
      routePath: '/services/garage-storage-solutions'
    }
  ];

  navigateToService(routePath: string) {
    this.router.navigate([routePath]);
  }
}
