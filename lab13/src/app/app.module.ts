import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttrDirective } from './attr.directive';
import { FormComponent } from './form/form.component';
import { StructDirective } from './struct.directive';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    AttrDirective,
    StructDirective
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
