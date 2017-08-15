import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

class quote {
	text: string;
	author: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	  newQuote:quote;
	  constructor(){
	  	this.newQuote = new quote();
	  }

	  comments = [
      {text:'first comment!', author: 'unknown'},
      {text: 'nice work!', author: 'unknown'},
      {text: 'I would also like to congratulate you!', author: 'unknown'}
  ];

	onSubmit(text){
		if(this.newQuote){
			var entry = {
				'text': this.newQuote.text,
				'author': this.newQuote.author
			};
		this.comments.push(entry);
		}	
	}

  remove(index: number){
      this.comments.splice(index, 1);
    }
}