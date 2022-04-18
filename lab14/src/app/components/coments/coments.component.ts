import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coment } from 'src/app/models/coment';
import { UserRepository } from 'src/app/services/user-repository';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss']
})
export class ComentsComponent implements OnInit {

  @Input() coments:Coment[] | undefined;
  @Output() addCom = new EventEmitter<any>()
  @Output() delCom = new EventEmitter<any>()
  coment:Coment = new Coment;
  constructor(private userRep:UserRepository) { }

  ngOnInit(): void {
  }
  addComent(){
    console.log('error')
    this.coment.date=new Date()
    this.coment.userId = this.userRep.getIdSelectedUser();
    this.addCom.emit(this.coment);
    this.coment = new Coment();
  }
  deleteComent(key:number){
    this.delCom.emit(key);
  }

}
