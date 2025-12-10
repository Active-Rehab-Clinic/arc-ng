import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutStore } from '../../stores/about.store';
import { StatsStore } from '../../stores/stats.store';
import { AboutInfo } from '@models/about.model';
import { Stat } from '@models/stat.model';
import { MetaService } from '@services/meta.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  aboutInfo: AboutInfo;
  stats: Stat[];

  constructor(
    private aboutStore: AboutStore,
    private statsStore: StatsStore,
    private metaService: MetaService
  ) {
    this.aboutInfo = this.aboutStore.getAboutInfo();
    this.stats = this.statsStore.getStats();
  }

  ngOnInit(): void {
    this.metaService.setPageMeta(
      'About Us - Expert Physiotherapists in Dwarka | 13+ Years Experience',
      'Meet Dr. Raju Pal and the expert team at Active Rehab Clinic. With over 13 years of experience in sports rehabilitation and pain management, we provide compassionate, evidence-based physiotherapy care in Dwarka, Delhi.',
      'physiotherapist Dwarka, Dr Raju Pal physiotherapist, best physiotherapy clinic Dwarka, experienced physiotherapist Delhi, sports rehabilitation expert, pain management specialist, certified physiotherapist Delhi, physical therapist Dwarka, rehabilitation specialist, manual therapy expert Delhi',
      '/assets/raju-pal.jpg',
      '/about'
    );
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  }

  getValueColor(index: number): string {
    const colors = ['blue', 'green', 'purple', 'orange', 'pink', 'teal'];
    return colors[index % colors.length];
  }

  getValueIcon(index: number): string {
    const icons = ['❤️', '🎯', '🤝', '📈', '⭐', '🔬'];
    return icons[index % icons.length];
  }
}
