import {
  Component,
  Input,
  AfterContentInit,
  ContentChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements AfterContentInit {
  @ContentChild('[slot=footer]') footerContent!: ElementRef;
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() variant: 'default' | 'bordered' | 'shadow' | 'hover' = 'default';
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  @Input() rounded: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';
  @Input() clickable: boolean = false;

  hasFooterContent: boolean = false;

  ngAfterContentInit() {
    this.hasFooterContent = !!this.footerContent;
  }

  get cardClasses(): string {
    const baseClasses =
      'bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700';

    const variantClasses = {
      default: '',
      bordered: 'border-2',
      shadow: 'shadow-md',
      hover: 'hover:shadow-lg transition-shadow duration-300',
    };

    const paddingClasses = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    const roundedClasses = {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
    };

    const clickableClass = this.clickable
      ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700'
      : '';

    return [
      baseClasses,
      variantClasses[this.variant],
      paddingClasses[this.padding],
      roundedClasses[this.rounded],
      clickableClass,
    ]
      .filter(Boolean)
      .join(' ');
  }
}
