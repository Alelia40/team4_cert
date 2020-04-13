import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  
  sportnewsList = [  ]

  constructor() { }

  ngOnInit(): void {
    this.sportnewsList = [] 
  }

}