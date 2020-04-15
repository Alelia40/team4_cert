import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  email: string = '';
  query: string = '';

  constructor(private es: EmailService, private http:HttpClient) { }

  ngOnInit(): void {
  }

  handleEmail() {
    if (this.email != '' && this.query != '') {
      console.log('sending email with ' + this.email + ', ' + this.query);
      let data = {
        email: this.email,
        content: this.query
      }
      console.log(data);
      this.http.post('http://localhost:3000/email/sendMail', data);
    }
  }

}
