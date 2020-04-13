import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sport-news',
  templateUrl: './sport-news.component.html',
  styleUrls: ['./sport-news.component.css']
})
export class SportNewsComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  newsId: number;
  title: string;
  description: string;
  publishedAt: string; 

  ngOnInit(): void {

    this.newsId = this.route.snapshot.params.id;
    // A method to get the info from backend
    // this.adminServ.getSingleUser(this.userId).subscribe(result => {
    //   this.title = result.name;
    //   this.description = result.number;
    //   this.publishedAt = result.email;
    // });
  }

}
