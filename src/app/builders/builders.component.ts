import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { BidRequestFormComponent } from '../shared/bid-request-form/bid-request-form.component';

@Component({
  selector: 'app-builders',
  standalone: true,
  imports: [CommonModule, BidRequestFormComponent],
  templateUrl: './builders.component.html',
  styleUrls: ['./builders.component.scss']
})
export class BuildersComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Builders | Bid Cabinets from Plans | DeezCabinuts');
    this.meta.updateTag({
      name: 'description',
      content: 'Cedar City cabinet shop for GCs, production builders, multifamily, and hotel PMs. Bid from plans. Supply only or install. One job at a time.'
    });
  }
}
