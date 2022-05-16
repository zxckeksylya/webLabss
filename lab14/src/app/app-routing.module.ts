import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component'
import { MainComponent } from './components/main/main.component';
import { PublicationComponent } from './components/publication/publication.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {
    path:'post/:id',component:PublicationComponent
  },
  {path:'**',redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
