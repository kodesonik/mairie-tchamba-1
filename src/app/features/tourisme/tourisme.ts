import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TourismeService, SiteTouristique } from '../../services/tourisme.service';

@Component({
  selector: 'app-tourisme',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tourisme.html',
  styleUrl: './tourisme.css'
})
export class TourismeComponent {
  sites: SiteTouristique[];

  constructor(private tourismeService: TourismeService) {
    this.sites = this.tourismeService.getSites();
  }
}
