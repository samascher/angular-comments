import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


class quote{
  update: false;
  text:string;
  author:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    updateText;
    updateAuthor;
    newQuote:quote;
    constructor(){
      this.newQuote = new quote();
    }
    comments = [
        {update:false, text:'first comment!', author:'me'},
        {update:false, text:'nice work!',author:'joe'},
        {update:false, text:'I would also like to congratulate you!',author:'linh'}
    ];

  onSubmit(){
  	if(this.newQuote){
      var entry ={
        'update': false,
        'text': this.newQuote.text,
        'author': this.newQuote.author
      };

      this.comments.push(entry);
    }
  }

  onDelete(i){
    this.comments.splice(i,1)
  }
  
  onUpdate(i){
    this.comments[i].update=false;
    this.comments[i].text= this.updateText;
    this.comments[i].author=this.updateAuthor;
  }

}