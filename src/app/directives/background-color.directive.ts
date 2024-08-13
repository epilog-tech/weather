import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
  standalone: true,
})
export class BackgroundColorDirective implements OnInit {
  @Input('appBackgroundColor') temperature: number = 0;
  constructor(private el: ElementRef<HTMLElement>) {}
  ngOnInit(): void {
    this.setBackground();
  }
  private setBackground() {
    const element = this.el.nativeElement;
    if (this.temperature < 10) {
      element.style.backgroundColor = 'blue';
    } else if (this.temperature < 25) {
      element.style.backgroundColor = 'green';
    } else {
      element.style.backgroundColor = 'red';
    }
  }
}
