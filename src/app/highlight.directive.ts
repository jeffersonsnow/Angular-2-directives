import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover(){ //you can change elements through the typescript using these listeners.
    this.backgroundColor = this.highlightColor;
  };
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;
  };
 @HostBinding('style.backgroundColor') get setColor(){ //using get is like making it read only?
   return this.backgroundColor;
 };
 @HostListener('click', ['$event']) //this is how to pass the event object to the Method handling the event
  onClick(event) {
    console.log("Event Target" + event.target);
  }
@Input() defaultColor = 'white';
@Input('highlight') highlightColor = 'green';
 private backgroundColor: string;
  constructor(){
  // constructor(private elementRef: ElementRef, private renderer: Renderer) { //accessing css with the constructor
    // this.elementRef.nativeElement.style.backgroundColor = "green"; this is one way to do it but it has disadvantages, not typical
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green'); //this accomplishes the same thing as the code above but it is cleaner
  } 
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
