import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject<any>();

  constructor() { }

  sendMsg(purpose:string, sender:string, message:string){
    this.subject.next({type: purpose, author: sender, content: message});
  }

  getMsg(){
    return this.subject.asObservable();
  }
}
