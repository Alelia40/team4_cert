import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { News } from 'src/app/models/news';
import { FetchNewsService } from 'src/app/services/fetch-news.service';

@Component({
  selector: 'app-sport-news',
  templateUrl: './sport-news.component.html',
  styleUrls: ['./sport-news.component.css']
})
export class SportNewsComponent implements OnInit {

  newsId: string = "";
  title: string = "";
  description: string = "";
  URL: string = "";
  imageURL: string = "";
  publishedAt: string = "";

  constructor(private router: Router,
    private route: ActivatedRoute, private newsService: FetchNewsService) { }

   
  
  ngOnInit(): void {

    this.newsId = this.route.snapshot.params.id;

    this.newsService.getNewsById(this.newsId).subscribe( result=>{
      var news;
      setTimeout(() => { news = result[0] 
        this.title = news.title;
        this.description = news.description;
        this.URL = news.URL;
        this.imageURL = news.imageURL;
        this.publishedAt = news.publishedAt;
      }, 0)
      
      
    })
  }

}
