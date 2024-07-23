import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthService } from '../password-strenght-service/password-strength.service';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  showPassword: boolean = false;
  sectionClasses: string[] = ['gray', 'gray', 'gray'];

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  checkPasswordStrength() {
    this.sectionClasses = this.passwordStrengthService.checkPasswordStrength(this.password);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
