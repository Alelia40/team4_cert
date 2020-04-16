import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/models/news';
import { FetchNewsService } from 'src/app/services/fetch-news.service';
import { throwError } from 'rxjs';

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
      this.news = result;
      console.log(this.news);
      this.showStory(1);
    })
  }

  //selects from the last 3 elements in the stack
  showStory(offset){
    let newsItem = this.news[this.news.length - offset];
    if(newsItem != undefined){
      this.currentTitle = newsItem.title;
      this.currentContent = newsItem.description;
    }else{
      this.currentTitle = "Title";
      this.currentContent = "Article Content"
    }
  }

}
