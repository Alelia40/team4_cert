import { Component, OnInit } from '@angular/core';
import { FetchNewsService } from 'src/app/services/fetch-news.service';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  
  sportnewsList : News[] = []

  constructor(private newsService: FetchNewsService) { }

  ngOnInit(): void {

    this.newsService.getNewsByCategory("Sport").subscribe( (result: News[]) => {
        this.sportnewsList = result
    })
      
  }

}