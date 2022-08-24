import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponentComponent } from './chat-component.component';
import { ConversationComponentComponent } from '../conversation-component/conversation-component.component';
import { MessageComponentComponent } from '../message-component/message-component.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ChatComponentComponent', () => {
  let component: ChatComponentComponent;
  let fixture: ComponentFixture<ChatComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatComponentComponent,
        ConversationComponentComponent,
        MessageComponentComponent
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
