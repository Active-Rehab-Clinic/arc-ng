import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FORM_VALIDATION } from './constants';

export class CustomValidators {
  static email(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const valid = FORM_VALIDATION.email.pattern.test(control.value);
    return valid ? null : { email: { message: FORM_VALIDATION.email.message } };
  }

  static phone(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const valid = FORM_VALIDATION.phone.pattern.test(control.value);
    return valid ? null : { phone: { message: FORM_VALIDATION.phone.message } };
  }

  static strongPassword(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const value = control.value;
    const hasMinLength = value.length >= FORM_VALIDATION.password.minLength;
    const hasPattern = FORM_VALIDATION.password.pattern.test(value);

    if (!hasMinLength || !hasPattern) {
      return { strongPassword: { message: FORM_VALIDATION.password.message } };
    }

    return null;
  }

  static confirmPassword(passwordField: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.parent) {
        return null;
      }

      const password = control.parent.get(passwordField);
      const confirmPassword = control;

      if (!password || !confirmPassword) {
        return null;
      }

      if (password.value !== confirmPassword.value) {
        return { confirmPassword: { message: 'Passwords do not match' } };
      }

      return null;
    };
  }

  static dateOfBirth(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const birthDate = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < 0 || age > 120) {
      return { dateOfBirth: { message: 'Please enter a valid date of birth' } };
    }

    return null;
  }

  static futureDate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      return { futureDate: { message: 'Date must be in the future' } };
    }

    return null;
  }

  static businessHours(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const selectedDate = new Date(control.value);
    const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = selectedDate.getHours();

    // Check if it's Sunday (closed)
    if (dayOfWeek === 0) {
      return {
        businessHours: { message: 'Appointments not available on Sundays' },
      };
    }

    // Check business hours (8 AM - 6 PM weekdays, 9 AM - 4 PM Saturday)
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      // Monday to Friday
      if (hour < 8 || hour >= 18) {
        return {
          businessHours: {
            message: 'Please select a time between 8:00 AM and 6:00 PM',
          },
        };
      }
    } else if (dayOfWeek === 6) {
      // Saturday
      if (hour < 9 || hour >= 16) {
        return {
          businessHours: {
            message:
              'Please select a time between 9:00 AM and 4:00 PM on Saturday',
          },
        };
      }
    }

    return null;
  }

  static minAge(minAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const birthDate = new Date(control.value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      if (age < minAge) {
        return {
          minAge: { message: `Minimum age required is ${minAge} years` },
        };
      }

      return null;
    };
  }

  static noWhitespace(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace
      ? {
          noWhitespace: {
            message: 'Field cannot be empty or contain only spaces',
          },
        }
      : null;
  }
}
