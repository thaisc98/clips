import { Component, inject} from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.nonNullable.group({

  })
}
