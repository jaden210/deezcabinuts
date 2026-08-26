import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-areas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-areas.component.html',
  styleUrl: './service-areas.component.scss'
})
export class ServiceAreasComponent {
  serviceAreas = [
    {
      county: 'Iron County (Cedar City Area)',
      locations: [
        {
          name: 'Cedar City'
        },
        {
          name: 'Enoch'
        },
        {
          name: 'Parowan'
        },
        {
          name: 'Paragonah'
        },
        {
          name: 'Cedar Highlands'
        },
        {
          name: 'Summit'
        }
      ]
    },
    {
      county: 'Washington County (St. George Area)',
      locations: [
        {
          name: 'St. George'
        },
        {
          name: 'Washington'
        },
        {
          name: 'Hurricane'
        },
        {
          name: 'Santa Clara'
        },
        {
          name: 'Ivins'
        },
        {
          name: 'La Verkin'
        },
        {
          name: 'Springdale'
        },
        {
          name: 'Toquerville'
        },
        {
          name: 'Enterprise'
        },
        {
          name: 'Leeds'
        },
        {
          name: 'Hildale'
        },
        {
          name: 'Little Valley'
        },
        {
          name: 'Bloomington'
        },
        {
          name: 'Bloomington Hills'
        },
        {
          name: 'Washington Fields'
        },
        {
          name: 'Desert Canyons'
        },
        {
          name: 'Desert Color'
        },
        {
          name: 'Sun River'
        },
        {
          name: 'Green Valley'
        },
        {
          name: 'Dixie Springs'
        },
        {
          name: 'Coral Canyon'
        },
        {
          name: 'Dixie Downs'
        }
      ]
    }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
