import { Component, Input, Self } from '@angular/core';
import { FormControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { CustomInputConfigurator, InputRestrictions } from '../interfaces/custom-input-configurator';

@Component({
  selector: 'app-custom-input',
  standalone: false,
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.scss'
})
export class CustomInput implements ControlValueAccessor {
    // @Input() placeholder?: string;
    // @Input() type?: 'text' | 'email' | 'number' | 'textarea' | 'password';
    // @Input() control: FormControl = new FormControl();

    // control: FormControl = new FormControl();

    @Input() customConfig!: CustomInputConfigurator;
    @Input() restrictions: InputRestrictions = {};

    disabled = false;
    value: any = '';

    onChange: (value: any) => void = () => {};
    onTouched: () => void = () => {};

    constructor(@Self() public ngControl: NgControl) {
      this.ngControl.valueAccessor = this;
    }

    get label() {
      return this.customConfig?.label ?? '';
    }

    get placeholder() {
      return this.customConfig?.placeholder ?? '';
    }

    get type() {
      return this.customConfig?.type ?? 'text';
    }

    get icon() {
      return this.customConfig?.icon ?? '';
    }

    writeValue(value: any): void {
      this.value = value;
    }
    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
      this.disabled = isDisabled;
    }

    onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
    this.customConfig.input?.(event); 
  }
}
