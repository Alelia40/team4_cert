import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/models/news';
import { FetchNewsService } from 'src/app/services/fetch-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  currentTitle:string = "Title";
  currentContent:string= "Article Content";

  news:News[] = [];

  article1:Object;
  article2:Object;
  article3:Object;

  constructor( private newsServ: FetchNewsService) { }

  ngOnInit(): void {
    this.newsServ.getNews().subscribe( (result: News[]) => {
      this.news = result
      console.log(this.news)
      this.handleSelect(1);
    })
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
