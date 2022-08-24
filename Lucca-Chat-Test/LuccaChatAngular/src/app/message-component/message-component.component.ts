import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService} from '../conversation-component/message.service';

@Component({
  selector: 'app-message-component',
  templateUrl: './message-component.component.html',
  styleUrls: ['./message-component.component.css']
})
export class MessageComponentComponent implements OnInit {

  @Input() author: string | undefined;

  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder,  private messageService: MessageService) {
    this.messageForm = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.messageService.addMessage({'author' : this.author, 'content' : this.messageForm.value.text});
    this.messageForm.reset();
  }
}
