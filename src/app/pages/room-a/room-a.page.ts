import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';

import { Message } from "../../class/message";
import { UserService } from "../../services/user.service";
import { MessageService } from "../../services/message.service";
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-room-a',
  templateUrl: './room-a.page.html',
  styleUrls: ['./room-a.page.scss'],
})
export class RoomAPage implements OnInit {


  user:string;
  writtenText: string = "";
  message: Message;
  public messages: Message[] = [];
  private messageAux: any;
  
  constructor(private userService:UserService, private messageService: MessageService, private loginService: LoginService) {

    this.loginService.getUser().then(resp => {
      this.user = resp.email.substring(0, resp.email.indexOf("@"));
      console.log(this.user);
    });

    this.messageService.getMessages().subscribe(resp => {
      this.messages = [];
      resp.forEach(res => {
        this.messageAux = res.payload.doc.data();
        this.messages.push((this.messageAux as Message));
        });
        this.messages.sort(function (a, b) {
          return new Date(a.date.substr(0, 19).trim()).getTime() - new Date(b.date.substr(0, 19).trim()).getTime();
      });
    });

   }

  send() {

    console.log(this.user);
    console.log(this.writtenText);
    this.message = new Message(this.user, new Date().toLocaleString(), this.writtenText, "4a")
    this.messageService.saveMessage(this.message.toJSON());
    this.writtenText = "";
  }

  ngOnInit() {
    

    //Load messages

    // let message = new Message("kjghsjkfsdjkf", new Date(), "fsdjklghsfkgjlhlkjfhlke", "4A");
    // let message1 = new Message("admin", new Date(), "fsdjklghsfkgjlhlkjfhlke", "4A");
    // let message2 = new Message("admin", new Date(), "fsdjklghsfkgjlhlkjfhlke", "4A");
    // let message3 = new Message("ghdfhjgfdjfhg", new Date(), "fsdjklghsfkgjlhlkjfhlke", "4A");
    // let message4 = new Message("trweteert", new Date(), "fsdjklghsfkgjlhlkjfhlke", "4A");
    // let message5 = new Message("admin", new Date(), "fsdjklghsfkgjlhlkjfhlke", "4A");

    // this.messages.push(message, message1, message2, message3, message4, message5);

    
  }

}
