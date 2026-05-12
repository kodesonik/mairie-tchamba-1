import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BlogService, Article } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class BlogComponent {
  allArticles: Article[];
  filteredArticles: Article[];
  searchQuery = '';

  constructor(private blogService: BlogService) {
    this.allArticles = this.blogService.getArticles();
    this.filteredArticles = this.allArticles;
  }

  onSearch(): void {
    const query = this.searchQuery.toLowerCase().trim();
    if (!query) {
      this.filteredArticles = this.allArticles;
      return;
    }
    this.filteredArticles = this.allArticles.filter(article =>
      article.titre.toLowerCase().includes(query) ||
      article.resume.toLowerCase().includes(query) ||
      article.tags.some(tag => tag.toLowerCase().includes(query)) ||
      article.date.toLowerCase().includes(query)
    );
  }
}
