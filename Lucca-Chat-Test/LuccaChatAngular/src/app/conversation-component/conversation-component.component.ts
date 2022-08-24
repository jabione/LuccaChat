import { Component, OnInit, Input } from '@angular/core';
import { MessageService} from './message.service';
//import { Logs } from 'selenium-webdriver';
@Component({
  selector: 'app-discussion-component',
  templateUrl: './conversation-component.component.html',
    styleUrls: ['./conversation-component.component.css']
})
export class ConversationComponentComponent implements OnInit {

  @Input() author: string | undefined;
 
  messages: any;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.change.subscribe(messages => {
      this.messages = this.messageService.getMessage();
    });
  }

}
