import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogStore } from '../../../stores/blog.store';
import { MetaService } from '../../../services/meta.service';
import { BlogPost } from '@models/blog.model';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = [];
  featuredPost: BlogPost | null = null;

  constructor(private blogStore: BlogStore, private metaService: MetaService) {}

  ngOnInit(): void {
    this.posts = this.blogStore.getAllPosts();
    this.featuredPost = this.posts[0] || null;

    this.metaService.setPageMeta(
      'Physiotherapy Blog | Expert Tips, Exercises & Recovery Guides',
      'Read expert physiotherapy articles from Active Rehab Clinic Dwarka. Get tips on pain relief, exercises, injury recovery, and wellness from experienced physiotherapists.',
      'physiotherapy blog, back pain exercises, injury recovery tips, physiotherapy advice Delhi, health tips, wellness blog, rehabilitation guides, expert physiotherapy articles',
      '/assets/raju-pal.jpg',
      '/blog'
    );

    this.metaService.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Active Rehab Clinic Blog',
      description:
        'Expert physiotherapy articles, tips, and guides from Active Rehab Clinic',
      url: 'https://activerehabclinic.com/blog',
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
    });
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'pain-relief': 'red',
      'sports-injury': 'purple',
      'home-care': 'teal',
      exercises: 'green',
      conditions: 'blue',
      wellness: 'orange',
      'recovery-tips': 'pink',
    };
    return colors[category] || 'gray';
  }
}
