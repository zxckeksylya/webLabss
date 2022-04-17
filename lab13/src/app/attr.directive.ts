import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector:'[attr-dir]',
    host:{
        '(mouseenter)':'onMouseEnter()',
        '(mouseleave)':'onMouseLeave()',
    }
})
export class AttrDirective{
    @Input() selectedColor:string = '#fff';
    @Input() selectedOpacity:number = 1;

    private baseColor:string = '#495057';
    private baseOpasity:number = 1;

    constructor(private element:ElementRef,private render:Renderer2){
        
    }
    onMouseEnter(){
        this.setColor(this.selectedColor);
        this.setOpasity(this.selectedOpacity);
    }
    onMouseLeave(){
        this.setColor(this.baseColor);
        this.setOpasity(this.baseOpasity);
    }

    private setColor(value:string){
        this.render.setStyle(this.element.nativeElement,'background-color',value);
    }
    private setOpasity(value:number){
        this.render.setStyle(this.element.nativeElement,'opacity',value);
    }
}