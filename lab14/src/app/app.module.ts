import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttrDirective } from './attr.directive';
import { FormComponent } from './components/form/form.component';
import { StructDirective } from './struct.directive';
import { TableComponent } from './components/table/table.component';
import { ComentsComponent } from './components/coments/coments.component';
import { PublicationComponent } from './components/publication/publication.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    AttrDirective,
    StructDirective,
    ComentsComponent,
    PublicationComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
