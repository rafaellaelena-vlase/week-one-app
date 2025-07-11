import { Directive, HostListener, Input } from '@angular/core';
import { InputRestrictions } from '../interfaces/custom-input-configurator';

@Directive({
  selector: '[appCustomDirective]',
  standalone: false
})
export class CustomDirective {
  @Input('appCustomDirective') inputRestrictions: InputRestrictions ={};

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const restrictions = this.inputRestrictions;
    if (
      !restrictions.onlyNumbers &&
      !restrictions.lowerCase &&
      !restrictions.noSpecialChars &&
      !restrictions.onlyLetters &&
      !restrictions.upperCase
    ) return;
    const allowed = [
      'Backspace',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
      'Home',
      'End',
    ];
    
    const isCtrl = event.ctrlKey || event.metaKey;
    const key = event.key;

    if (
      allowed.includes(key) ||
      (isCtrl && ['a', 'c', 'v', 'x'].includes(event.key.toLowerCase()))
    )
      return;

    if (restrictions.onlyNumbers && !/^[0-9]$/.test(key)) {
      return event.preventDefault();
    }
    if (restrictions.onlyLetters && !/^[a-zA-Z]$/.test(key)) {
      return event.preventDefault();
    }
    if (restrictions.noSpecialChars && !/^[a-zA-Z0-9 ]$/.test(key)) {
      return event.preventDefault();
    }
    if (restrictions.lowerCase && !/^[a-z0-9]$/.test(key)) {
      return event.preventDefault();
    }
    if (restrictions.upperCase && !/^[A-Z0-9]$/.test(key)) {
      return event.preventDefault();
    }
  }
}
