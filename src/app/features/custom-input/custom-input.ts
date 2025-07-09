import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: false,
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.scss'
})
export class CustomInput {
    @Input() placeholder?: string;
    @Input() type?: 'text' | 'email' | 'number' | 'textarea' | 'password';
    @Input() control: FormControl = new FormControl();
}
