import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomInputConfigurator } from '../interfaces/custom-input-configurator';

@Component({
  selector: 'app-feedback',
  standalone: false,
  templateUrl: './feedback.html',
  styleUrl: './feedback.scss'
})
export class Feedback {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      feedback: ['', Validators.minLength(5)]
    });
  }

  inputConfig: Record<string, CustomInputConfigurator> = {
    name: {
      FormControlName: 'name',
      label: 'Your Name Here',
      placeholder: 'Enter your name',
      required: true,
      minLength: 4,
      input: (e: Event) => {
        const val = (e.target as HTMLInputElement).value;
        console.log('Typing user name:', val);
      },
      customDirective:true,
    },
    email: {
      FormControlName: 'email',
      label: 'Your Email Here',
      placeholder: 'Enter your email',
      required: true,
      pattern:'/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/',
      input: (e: Event) => {
        const val = (e.target as HTMLInputElement).value;
        console.log('Typing user email:', val);
      },
      customDirective:false,
    },
    feedback: {
      FormControlName: 'feedback',
      label: 'Your Feedback Here',
      placeholder: 'Write your feedback...',
      required: true,
      type: 'text',
      input: (e: Event) => {
        const val = (e.target as HTMLInputElement).value;
        console.log('Typing user email:', val);
      },
      customDirective:true
    },
  };

  onSubmit() {
    if (this.form.valid) {
      const newFeed = this.form.value;
      console.log('Feedback added:', newFeed);
      this.form.reset();
    } else {
      console.log('Invalid form ', this.form.value);
    }
  }
}
