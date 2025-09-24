import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutStore, AboutInfo } from '../../stores/about.store';
import { StatsStore, Stat } from '../../stores/stats.store';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutInfo: AboutInfo;
  stats: Stat[];

  constructor(
    private aboutStore: AboutStore,
    private statsStore: StatsStore
  ) {
    this.aboutInfo = this.aboutStore.getAboutInfo();
    this.stats = this.statsStore.getStats();
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
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