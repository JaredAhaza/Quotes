export class Quote {
  id:number
  name:string
  author:string
  quote:string
  upvotes:number
  downvotes:number
  date:Date
  constructor(id,name, author,quote,upvotes,downvotes,date){
    this.id = id
    this.name = name
    this.author = author
    this.quote = quote
    this.upvotes = upvotes
    this.downvotes = downvotes
    this.date = new Date()

  }
  upvote(){
    this.upvotes++
  }
  downvote(){
    this.downvotes++
  }
}
// export class Quote{
// name:string
// constructor(name){
//   this.name = name
//
// }
// }
