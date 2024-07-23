import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  constructor() {}

  checkPasswordStrength(password: string): string[] {
    const sectionClasses = ['gray', 'gray', 'gray'];

    if (password.length === 0) {
      return sectionClasses;
    }

    if (password.length < 8) {
      return ['red', 'red', 'red'];
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(password);

    const strength = Number(hasLetters) + Number(hasNumbers) + Number(hasSymbols);

    if (strength === 1) {
      return ['red', 'gray', 'gray'];
    } else if (strength === 2) {
      return ['yellow', 'yellow', 'gray'];
    } else if (strength === 3) {
      return ['green', 'green', 'green'];
    }

    return sectionClasses;
  }
}
