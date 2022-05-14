import { Component, OnInit } from '@angular/core';
import { Post} from '../../models/post'
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PostReposytory } from 'src/app/services/posts-repository';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public myForm:FormGroup
  constructor(private data:PostReposytory) { 
    this.myForm = new FormGroup({
      title: new FormControl('',[Validators.required]),
      text: new FormControl('',[
        Validators.required
      ])
    })
  }

  public addPost():void{
    if(this.myForm.valid){
      const {title,text} = this.myForm.getRawValue();
      const post = new Post(undefined,title,text,undefined,undefined);
      this.data.addPost(post)
      this.myForm.reset();
    }
  }

  ngOnInit(): void {
  }

}
