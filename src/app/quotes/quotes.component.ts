import { Component, OnInit,Input,Output } from '@angular/core';
import {Quote} from '../quotes'
@Component({

  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  // @Input() quotes
  quotes = [
    new Quote(1,"my quotes", "author","This is a quote",0,0,new Date(2018,1,4))
  ]

  getData(e){
    this.quotes.push(e);
  }

upVote(id) {
    this.quotes[id].upvote()
    // alert(id)
  }
downVote(id) {
    this.quotes[id].downvote()
  }

delete(id) {
  this.quotes.splice(id,1)
}


  constructor() {
  this.quotes = []
 }

  ngOnInit() {
  }

}
