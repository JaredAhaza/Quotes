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
  }
  downVote(id) {
    this.quotes[id].downvote()
  }

  constructor() {
  this.quotes = []
 }

  ngOnInit() {
  }

}


import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quotes'
@Component({
 selector: 'app-quotes-form',
 templateUrl: './quotes-form.component.html',
 styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
 @Input() myArr

 upVote(id) {
   this.myArr[id].upvote()
 }
 downVote(id) {
   this.myArr[id].downvote()
 }
 delete(id) {
   this.myArr.splice(this.myArr[id])
 }
 constructor() {
   this.myArr = []
 }

 ngOnInit() {
 }

}
