import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Coment } from 'src/app/models/coment';
import { Post } from 'src/app/models/post';
import { PostReposytory } from 'src/app/services/posts-repository';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  public id:number|undefined;
  public post:Post | undefined;

  private routeSubscription:Subscription | undefined;

  constructor(private route:ActivatedRoute,private data:PostReposytory,private router:Router) {
    this.routeSubscription = this.route.params.subscribe(params => this.id = params['id'])
    this.post = data.getPost(this.id!)
   }

  ngOnInit(): void {

  }

  addComent(newComent:Coment,idOfPost:number){
    this.data.addComent(newComent,idOfPost);
    // console.log(newComent)
    // console.log(idOfPost)
  }
  deleteComent(idOfComent:number,idPfPost:number){
    this.data.deleteComent(idPfPost,idOfComent);
  }
  goToHome(){
    this.router.navigate(['']);
  }
}
