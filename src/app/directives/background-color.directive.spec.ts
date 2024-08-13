import { BackgroundColorDirective } from './background-color.directive';
import { ElementRef } from '@angular/core';
/* eslint-disable @typescript-eslint/no-unsafe-call */
describe('BackgroundColorDirective', () => {
  let elementRef: ElementRef<HTMLElement>;
  let directive: BackgroundColorDirective;

  beforeEach(() => {
    // Create a mock ElementRef with a nativeElement
    elementRef = new ElementRef<HTMLElement>(document.createElement('div'));
    directive = new BackgroundColorDirective(elementRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set background color to blue when temperature is less than 10', () => {
    directive.temperature = 5;
    directive.ngOnInit();
    expect(elementRef.nativeElement.style.backgroundColor).toBe('blue');
  });

  it('should set background color to green when temperature is between 10 and 25', () => {
    directive.temperature = 15;
    directive.ngOnInit();
    expect(elementRef.nativeElement.style.backgroundColor).toBe('green');
  });

  it('should set background color to red when temperature is 25 or higher', () => {
    directive.temperature = 30;
    directive.ngOnInit();
    expect(elementRef.nativeElement.style.backgroundColor).toBe('red');
  });
});