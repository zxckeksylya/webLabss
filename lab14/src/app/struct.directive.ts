import { Directive, DoCheck, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[structDirOf]',
})
export class StructDirective implements OnInit,DoCheck {
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<Object>
  ) {}
  @Input('structDirOf')
  dataSource: any;

  ngOnInit() {
    this.updateContent();
  }

  ngDoCheck(){
    this.updateContent();
  }
  private updateContent():void{
    this.container.clear();
    let i=0;
    while(i<this.dataSource.length){
      this.container.createEmbeddedView(
        this.template,
        new StructIterator(this.dataSource[i])
      );
      i++;
    }
  }
}

class StructIterator {
  constructor(public $implicit: any) {}
}
