import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface DropdownItem {
  label: string;
  value: any;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() items: DropdownItem[] = [];
  @Input() placeholder: string = 'Select option';
  @Input() disabled: boolean = false;
  @Input() position: 'bottom' | 'top' | 'left' | 'right' = 'bottom';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Output() itemSelected = new EventEmitter<DropdownItem>();

  isOpen: boolean = false;
  selectedItem: DropdownItem | null = null;

  constructor(private elementRef: ElementRef) {}

  get buttonClasses(): string {
    const baseClasses =
      'text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800';

    const sizeClasses = {
      sm: 'px-3 py-2 text-xs',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-6 py-3 text-base',
    };

    const disabledClass = this.disabled ? 'opacity-50 cursor-not-allowed' : '';

    return [baseClasses, sizeClasses[this.size], disabledClass]
      .filter(Boolean)
      .join(' ');
  }

  get dropdownClasses(): string {
    const baseClasses =
      'z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700';

    const positionClasses = {
      bottom: 'top-full mt-2',
      top: 'bottom-full mb-2',
      left: 'right-full mr-2',
      right: 'left-full ml-2',
    };

    return [baseClasses, positionClasses[this.position]].join(' ');
  }

  toggleDropdown(): void {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  selectItem(item: DropdownItem): void {
    if (!item.disabled) {
      this.selectedItem = item;
      this.isOpen = false;
      this.itemSelected.emit(item);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
