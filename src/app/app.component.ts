import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'arc-ng';
  showFooter$;

  constructor(private router: Router, private layoutService: LayoutService) {
    this.showFooter$ = this.layoutService.showFooter$;
  }

  ngOnInit() {
    // Listen to route changes and hide footer on auth routes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects || event.url;

        // Hide footer on auth routes
        if (url.startsWith('/auth')) {
          this.layoutService.hideFooter();
        } else {
          this.layoutService.showFooter();
        }
      });
  }
}
