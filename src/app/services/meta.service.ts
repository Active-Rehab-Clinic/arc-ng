import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private readonly baseUrl = 'https://activerehabclinic.com'; // Update with your actual domain
  private readonly defaultImage = '/assets/raju-pal.jpg'; // Update with your clinic logo/image

  constructor(private title: Title, private meta: Meta) {}

  setPageMeta(
    title: string,
    description: string,
    keywords?: string,
    image?: string,
    url?: string
  ): void {
    const fullTitle = `${title} | Active Rehab Clinic`;
    const fullUrl = url ? `${this.baseUrl}${url}` : this.baseUrl;
    const imageUrl = image
      ? `${this.baseUrl}${image}`
      : `${this.baseUrl}${this.defaultImage}`;

    // Basic meta tags
    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: description });

    // Keywords meta tag
    if (keywords) {
      this.meta.updateTag({ name: 'keywords', content: keywords });
    }

    // Open Graph tags for social media
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ property: 'og:url', content: fullUrl });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:site_name',
      content: 'Active Rehab Clinic',
    });

    // Twitter Card tags
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });

    // Additional SEO tags
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Active Rehab Clinic' });
    this.meta.updateTag({ name: 'geo.region', content: 'IN-DL' });
    this.meta.updateTag({
      name: 'geo.placename',
      content: 'Dwarka, New Delhi',
    });
    this.meta.updateTag({ name: 'geo.position', content: '28.5921;77.0460' }); // Update with actual coordinates
  }

  setStructuredData(data: any): void {
    // Remove existing structured data script if present
    const existingScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }
}
