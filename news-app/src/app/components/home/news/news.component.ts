import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  currentTitle:string = "Title";
  currentContent:string= "Article Content";

  @Input() news:News[];

  article1:Object;
  article2:Object;
  article3:Object;

  constructor() { }

  ngOnInit(): void {
    this.handleSelect(1);
    console.log(this.news);
  }

  handleSelect(num:Number){
    if(num ==1){
      console.log("most recent story");
      this.showStory(0);
    }else if(num == 2){
      console.log("2nd most recent story");
      this.showStory(1);
    }else{
      console.log("3rd most recent story");
      this.showStory(2);
    }
  }

  private showStory(num){
    let newsItem = this.news[num];
    if(newsItem != undefined){
      this.currentTitle = newsItem.title;
      this.currentContent = newsItem.description;
    }else{
      this.currentTitle = "Title";
      this.currentContent = "Article Content"
    }
  }

}
