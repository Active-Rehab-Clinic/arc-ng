import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BlogStore } from '../../../stores/blog.store';
import { MetaService } from '../../../services/meta.service';
import { BlogPost } from '@models/blog.model';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | null = null;
  relatedPosts: BlogPost[] = [];
  contentHtml: SafeHtml = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogStore: BlogStore,
    private metaService: MetaService,
    private sanitizer: DomSanitizer
  ) {
    // Configure marked options
    marked.setOptions({
      breaks: true,
      gfm: true,
    });
  }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async (params) => {
      const slug = params['slug'];
      this.post = this.blogStore.getPostBySlug(slug) || null;

      if (this.post) {
        // Set SEO meta tags
        this.metaService.setPageMeta(
          this.post.metaTitle,
          this.post.metaDescription,
          this.post.keywords,
          '/assets/raju-pal.jpg',
          `/blog/${this.post.slug}`
        );

        // Set structured data
        this.metaService.setStructuredData({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: this.post.title,
          description: this.post.excerpt,
          author: {
            '@type': 'Person',
            name: this.post.author,
            jobTitle: this.post.authorRole,
          },
          datePublished: this.post.publishDate.toISOString(),
          dateModified: this.post.lastUpdated.toISOString(),
          publisher: {
            '@type': 'MedicalBusiness',
            name: 'Active Rehab Clinic',
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'C-8, opp. Delhi International School, Pocket-8, Sector 17 Dwarka',
              addressLocality: 'New Delhi',
              addressRegion: 'Delhi',
              postalCode: '110078',
              addressCountry: 'IN',
            },
          },
          keywords: this.post.tags.join(', '),
        });

        // Convert markdown to HTML
        const html = await marked(this.post.content);
        this.contentHtml = this.sanitizer.bypassSecurityTrustHtml(html);

        // Load related posts
        this.relatedPosts = this.blogStore.getRelatedPosts(this.post.id);
      } else {
        // Post not found, redirect to blog list
        this.router.navigate(['/blog']);
      }
    });
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  shareOnWhatsApp(): void {
    if (this.post) {
      const text = encodeURIComponent(
        `Check out this article: ${this.post.title}`
      );
      const url = encodeURIComponent(
        `https://activerehabclinic.com/blog/${this.post.slug}`
      );
      window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
    }
  }

  shareOnFacebook(): void {
    if (this.post) {
      const url = encodeURIComponent(
        `https://activerehabclinic.com/blog/${this.post.slug}`
      );
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        '_blank'
      );
    }
  }

  shareOnTwitter(): void {
    if (this.post) {
      const text = encodeURIComponent(this.post.title);
      const url = encodeURIComponent(
        `https://activerehabclinic.com/blog/${this.post.slug}`
      );
      window.open(
        `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
        '_blank'
      );
    }
  }
}
