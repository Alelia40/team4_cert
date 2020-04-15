import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor( private socket:Socket) { }

  sendMsg(purpose: string, sender: string, message: string) {
    this.socket.emit("msg", {
      type: purpose,
      author: sender,
      content: message
    });
  }

  getMessage() {
    return this.socket
      .fromEvent<any>("Chat Message");
  }
}
