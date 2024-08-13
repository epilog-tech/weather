import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
  standalone: true
})
export class BackgroundColorDirective implements OnInit{
  @Input('appBackgroundColor') temperature : number = 0
  constructor(private el : ElementRef) { }
  ngOnInit(): void {
    this.setBackground();
  }
  private setBackground(){
    if (this.temperature < 10)
    {
      this.el.nativeElement.style.backgroundColor = 'blue';
    }
    else if (this.temperature < 25)
    {
      this.el.nativeElement.style.backgroundColor = 'green';
    }
    else {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }
}
