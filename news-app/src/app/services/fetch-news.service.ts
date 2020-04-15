import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";


import { News } from "../models/news";


@Injectable({
  providedIn: 'root'
})
export class FetchNewsService {

  //posts :any[]= []

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get('http://localhost:3000/getnews')
  }
  getNewsByCategory(category) {
    return this.http.get('http://localhost:3000/getnews/'+category)
  }

  getNewsById(id){
    return this.http.get<News>('http://localhost:3000/getnews/id/'+id)
  }

}
