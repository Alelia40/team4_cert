import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  invalid:boolean = false;
  sent:boolean = false;
  email: string = '';
  query: string = '';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  handleEmail() {
    this.invalid = false;
    this.sent = false;
    if (this.query != '') {
      console.log('sending email with ' + this.email + ', ' + this.query);
      let data = {
        email: this.email,
        content: this.query
      }
      this.http.post('http://localhost:3000/email/sendMail', data, {responseType:"text"}).subscribe( data =>{
        this.sent = true;
        this.email = '';
        this.query = '';
      });
    }else{
      this.invalid = true;
    }
  }


}
