import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColorChange]',
})
export class ColorChangeDirective {
  @HostBinding('style.color') textColor: string = 'green';
  @HostBinding('style.border-color') borderColor: string = 'purple';
  private colors: string[] = ['red', 'blue', 'green', 'orange', 'purple', 'yellow'];

  @HostListener('keyup') onKeyUp() {
    this.changeColors();
  }

  private changeColors() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    const randomColor = this.colors[randomIndex];

    this.textColor = randomColor;
    this.borderColor = randomColor;
  }
}
