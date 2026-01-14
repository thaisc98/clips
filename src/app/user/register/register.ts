import { Component, inject} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Input } from '../../shared/input/input';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, Input],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    age: [26],
    password: [''],
    confirmPassword: [''],
    phoneNumber: ['']
  })
}
