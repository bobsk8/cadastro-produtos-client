import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() imputDirective = 'white';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.imputDirective;
  }
  constructor() { }


}
  // Exemplo de implementanção
// <input type="text" #colorImput appHighlight [imputDirective]="colorImput.value">
