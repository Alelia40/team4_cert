import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  email:string = '';
  query:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleEmail(){
    console.log('sending email with '+this.email+', '+this.query);
  }

}
