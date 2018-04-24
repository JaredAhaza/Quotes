import { Component, OnInit,Input } from '@angular/core';
import {Quote} from '../quotes'
@Component({

  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  @Input() quotes

upVote(id) {
    this.quotes[id].upvote()
    // alert(id)
  }
downVote(id) {
    this.quotes[id].downvote()
  }

delete(id) {
  this.quotes.splice(this.quotes[id])
}


  constructor() {
  this.quotes = []
 }

  ngOnInit() {
  }

}
