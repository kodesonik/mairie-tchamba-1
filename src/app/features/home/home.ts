import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogService, Article } from '../../services/blog.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  latestArticles: Article[];

  constructor(private blogService: BlogService) {
    this.latestArticles = this.blogService.getArticles().slice(0, 3);
  }
}
