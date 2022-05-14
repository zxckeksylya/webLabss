import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Coment } from 'src/app/models/coment';
import { UserRepository } from 'src/app/services/user-repository';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss']
})
export class ComentsComponent implements OnInit {

  public myForm:FormGroup;

  @Input() coments:Coment[] | undefined;
  @Output() addCom = new EventEmitter<any>()
  @Output() delCom = new EventEmitter<any>()

  constructor(private userRep:UserRepository) { 
    this.myForm = new FormGroup({
      text:new FormControl('',[Validators.required])
    })
  }

  public ngOnInit(): void {  }
  
  public addComent(){
    if(this.myForm.valid){
      const {text} = this.myForm.getRawValue();
      const coment = new Coment(undefined,this.userRep.getIdSelectedUser(),text,new Date())
      this.addCom.emit(coment);
      this.myForm.reset()
    }
  }
  public deleteComent(key:number){
    this.delCom.emit(key);
  }

}
