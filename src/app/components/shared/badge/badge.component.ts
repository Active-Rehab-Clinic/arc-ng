import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input() variant:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() rounded: boolean = true;
  @Input() outline: boolean = false;

  get badgeClasses(): string {
    const baseClasses = 'inline-flex items-center font-medium';

    const sizeClasses = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-0.5 text-sm',
      lg: 'px-3 py-1 text-base',
    };

    const roundedClass = this.rounded ? 'rounded-full' : 'rounded';

    const variantClasses = this.outline
      ? {
          default:
            'text-gray-800 border border-gray-300 bg-white dark:text-gray-300 dark:border-gray-600 dark:bg-gray-800',
          primary:
            'text-primary-800 border border-primary-300 bg-primary-50 dark:text-primary-400 dark:border-primary-800 dark:bg-primary-900',
          secondary:
            'text-secondary-800 border border-secondary-300 bg-secondary-50 dark:text-secondary-400 dark:border-secondary-800 dark:bg-secondary-900',
          success:
            'text-green-800 border border-green-300 bg-green-50 dark:text-green-400 dark:border-green-800 dark:bg-green-900',
          warning:
            'text-yellow-800 border border-yellow-300 bg-yellow-50 dark:text-yellow-400 dark:border-yellow-800 dark:bg-yellow-900',
          danger:
            'text-red-800 border border-red-300 bg-red-50 dark:text-red-400 dark:border-red-800 dark:bg-red-900',
          info: 'text-blue-800 border border-blue-300 bg-blue-50 dark:text-blue-400 dark:border-blue-800 dark:bg-blue-900',
        }
      : {
          default:
            'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
          primary:
            'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300',
          secondary:
            'bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300',
          success:
            'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
          warning:
            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
          danger: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
          info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
        };

    return [
      baseClasses,
      sizeClasses[this.size],
      roundedClass,
      variantClasses[this.variant],
    ]
      .filter(Boolean)
      .join(' ');
  }
}
