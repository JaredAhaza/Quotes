import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quotes'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  quotes = new Quote(0,"","","",0,0,new Date())
  @Output() emitData = new EventEmitter<Quote>()

  date:Date
  quoteid:number = 0

   onFormSubmit(form){
    //  this.quotes.push()
    console.log(form)
     this.emitData.emit(new Quote(this.quoteid++,form.value.name, form.value.quote, form.value.author,0,0,this.date))
     form.reset()
   }
  constructor() {
    //  this.quotes = []
    }
    ngOnInit(){}

}
