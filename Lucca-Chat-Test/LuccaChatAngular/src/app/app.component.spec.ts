import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ChatComponentComponent } from './chat-component/chat-component.component';
import { MessageComponentComponent } from './message-component/message-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConversationComponentComponent } from './conversation-component/conversation-component.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ConversationComponentComponent,
        ChatComponentComponent,
        MessageComponentComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have as title 'LuccaChatAngular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('LuccaChatAngular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('LuccaChatAngular app is running!');
  });
});
