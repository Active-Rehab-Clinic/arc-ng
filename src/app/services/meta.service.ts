import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  setPageMeta(title: string, description: string): void {
    this.title.setTitle(`${title} | Active Rehab Clinic`);
    this.meta.updateTag({ name: 'description', content: description });
  }
}