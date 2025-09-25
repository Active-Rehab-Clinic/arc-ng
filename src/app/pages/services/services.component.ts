import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesStore } from '../../stores/services.store';
import { Service } from '@models/service.model';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  services: Service[];

  constructor(
    private servicesStore: ServicesStore,
    private metaService: MetaService
  ) {
    this.services = this.servicesStore.getServices();
  }

  ngOnInit(): void {
    this.metaService.setPageMeta(
      'Services',
      'Comprehensive physiotherapy services including sports injury treatment, rehabilitation, manual therapy, and wellness programs.'
    );
  }
}