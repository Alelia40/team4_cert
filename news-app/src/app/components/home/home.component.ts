import { Component, OnInit } from '@angular/core';
import { FetchNewsService } from 'src/app/services/fetch-news.service';

import { News } from 'src/app/models/news'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post : News [] = []
  constructor( private newsServ: FetchNewsService) { }

  ngOnInit(): void {
    this.newsServ.getNews().subscribe( (result: News[]) => {
      this.post = result
      console.log(this.post)
    })

    
  }

}
