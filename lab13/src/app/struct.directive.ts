import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[struct-dir]',
})
export class StructDirective{
    constructor(private container:ViewContainerRef,private template:TemplateRef<Object>){

    }
    @Input() dataSorce:any;

    ngOnInit(){
        this.container.clear();
        let i=0;
        while(i<this.dataSorce.length){
            this.container.createEmbeddedView(this.template,new StructIterator(this.dataSorce[i]));
        }
    }

}

class StructIterator{
    constructor(public $implicit:any){}
}