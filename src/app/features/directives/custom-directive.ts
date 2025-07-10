import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: false
})
export class CustomDirective {
 // TO DO
  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    event.preventDefault();
  }
}
