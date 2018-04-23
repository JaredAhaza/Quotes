import { Component } from '@angular/core';
import {Quote} from './quotes'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[]
  date:Date
  quoteid:number = 0
   onFormSubmit(form){
     this.quotes.push(new Quote(this.quoteid++,form.value.name, form.value.quote, form.value.author,0,0,this.date))

     form.reset()
   }
  constructor() {
     this.quotes = []
    }

}
