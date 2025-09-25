import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setPageMeta(
      'Book Appointment',
      'Schedule your physiotherapy appointment online. Choose your preferred date, time, and treatment type with our easy booking system.'
    );
  }
}