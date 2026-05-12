import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService, Article } from '../../../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css'
})
export class BlogDetailComponent implements OnInit {
  article: Article | undefined;
  selectedImage: string = '';
  isLightboxOpen: boolean = false;
  lightboxImage: string = '';

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.article = this.blogService.getArticleById(id);
      if (this.article) {
        this.selectedImage = this.article.imagePrincipale;
      }
    }
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  openLightbox(image: string): void {
    this.lightboxImage = image;
    this.isLightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.isLightboxOpen = false;
    document.body.style.overflow = '';
  }

  formatParagraph(text: string): string {
    // Format quotes in italics
    return text.replace(/«\s*([^»]+)\s*»/g, '<em class="text-gray-600 italic">« $1 »</em>');
  }
}
