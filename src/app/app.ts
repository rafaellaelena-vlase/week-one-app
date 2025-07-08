import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'music-mood-logger';
  selected="home";

  setSelected(naem : string) {
    this.selected=naem;
  }

  form: FormGroup;

  constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      feedback: ['', Validators.minLength(5)]
    });
  }

  getControl(name: string) {
    return this.form.get(name) as FormControl;
  }
}
