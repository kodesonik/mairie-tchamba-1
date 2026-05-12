import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TourismeService, SiteTouristique } from '../../../services/tourisme.service';

@Component({
  selector: 'app-tourisme-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tourisme-detail.html',
  styleUrl: './tourisme-detail.css'
})
export class TourismeDetailComponent implements OnInit {
  site: SiteTouristique | undefined;
  selectedImage: string = '';

  constructor(
    private route: ActivatedRoute,
    private tourismeService: TourismeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.site = this.tourismeService.getSiteById(id);
      if (this.site) {
        this.selectedImage = this.site.image;
      }
    }
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }
}
