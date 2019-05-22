import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropDown]',
  exportAs:'appDropDown'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen  = false;
    @HostListener('click') mouseclick()
    {
        this.isOpen = !this.isOpen;
        //this.renderer.addClass(this.elementref.nativeElement,'open');
    }
    
    constructor(private elementref : ElementRef,private renderer : Renderer2)
    {

    }
    ngOnInit()
    {}

}
