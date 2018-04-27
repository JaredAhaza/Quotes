import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FormComponent } from './form/form.component';
import { StrikethroughDirective } from './strikethrough.directive';



@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    FormComponent,
    StrikethroughDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
