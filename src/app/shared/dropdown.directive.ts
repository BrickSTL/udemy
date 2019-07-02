import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostListener('class.open') isOpen = false;

  @HostListener('click') toogleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() {

  }
}
