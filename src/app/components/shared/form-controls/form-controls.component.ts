import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-form-controls',
  imports: [CommonModule],
  templateUrl: './form-controls.component.html',
  styleUrl: './form-controls.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormControlsComponent),
      multi: true,
    },
  ],
})
export class FormControlsComponent implements ControlValueAccessor {
  @Input() type: 'input' | 'textarea' | 'select' = 'input';
  @Input() inputType: string = 'text';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() errorMessage: string = '';
  @Input() helpText: string = '';
  @Input() rows: number = 4;
  @Input() options: SelectOption[] = [];

  @Output() valueChange = new EventEmitter<string>();
  @Output() blur = new EventEmitter<void>();

  value: string = '';
  inputId = `form-control-${Math.random().toString(36).substr(2, 9)}`;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  get hasError(): boolean {
    return !!this.errorMessage;
  }

  get inputClasses(): string {
    const baseClasses =
      'block w-full p-2.5 text-sm text-gray-900 border rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500';

    if (this.hasError) {
      return `${baseClasses} bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`;
    }

    if (this.disabled) {
      return `${baseClasses} bg-gray-100 cursor-not-allowed dark:bg-gray-600`;
    }

    return `${baseClasses} bg-gray-50 border-gray-300 dark:bg-gray-700`;
  }

  onInput(event: Event): void {
    const target = event.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;
    this.value = target.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  onBlur(): void {
    this.onTouched();
    this.blur.emit();
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
