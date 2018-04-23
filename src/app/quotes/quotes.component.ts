import { Component, OnInit,Input } from '@angular/core';
import {Quote} from '../quotes'
@Component({

  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  @Input() quotes

  constructor() {
  this.quotes = []
 }

  ngOnInit() {
  }

}
