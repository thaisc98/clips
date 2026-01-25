import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Input } from '../../shared/input/input';
import { Alert } from '../../shared/alert/alert';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, Input, Alert],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    age: [26, [Validators.required, Validators.min(18), Validators.max(90)]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
      ],
    ],
    confirmPassword: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
  });

  showAlert = signal(false);
  alertMessage = signal('Please wait! account is being created');
  alertColor = signal('blue');

  register() {
    this.showAlert.set(true);
    this.alertMessage.set('Please wait! account is being created');
    this.alertColor.set('blue');
    console.log('Submitted form');
  }
}
