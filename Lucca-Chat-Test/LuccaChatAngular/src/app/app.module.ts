import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ConversationComponentComponent } from './conversation-component/conversation-component.component';
import { ChatComponentComponent } from './chat-component/chat-component.component';
import { MessageComponentComponent } from './message-component/message-component.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ConversationComponentComponent,
    ChatComponentComponent,
    MessageComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
