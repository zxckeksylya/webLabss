import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttrDirective } from './attr.directive';
import { FormComponent } from './components/form/form.component';
import { StructDirective } from './struct.directive';
import { TableComponent } from './components/table/table.component';
import { ComentsComponent } from './components/coments/coments.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    AttrDirective,
    StructDirective,
    ComentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
