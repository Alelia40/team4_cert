import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  currentTitle:string = "Title";
  currentContent:string= "Article Content";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.handleSelect(1);

    this.getNews().subscribe( data => {
      console.log(data);
    })
  }

  handleSelect(num:Number){
    if(num ==1){
      console.log("most recent story");
    }else if(num == 2){
      console.log("2nd most recent story");
    }else{
      console.log("3rd most recent story");
    }
  }

  getNews(){
    return this.http.get(`http://localhost:3000/news/allNews`);
  }

}
