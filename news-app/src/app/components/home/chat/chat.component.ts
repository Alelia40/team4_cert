import { Component,Renderer2, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('chatList') el: ElementRef;

  messageContent:string = '';
  username:string = '';

  constructor(private renderer:Renderer2) {
  }

  ngOnInit(): void {
  }

  handleUNSelect(){
    document.getElementById('usernameSelect').style.display = "none";
    document.getElementById('sendChat').style.display = "flex";
    console.log(this.username);
  }

  handleChatSend(){
    console.log("sending message");
    this.receiveMessage(this.username,this.messageContent);
  }

  receiveMessage(author:string, content:string){
    const list: HTMLParagraphElement = this.renderer.createElement('p');
    list.innerHTML = `<p>${author.toUpperCase()}: ${content}</p>`;
    this.renderer.appendChild(this.el.nativeElement, list);
  }
}
