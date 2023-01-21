import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message('1', 'subject-1', 'this is the first message', 'sender-1'),
    new Message('2', 'subject-2', 'this is the second message', 'sender-2'),
    new Message('3', 'subject-3', 'this is the third message', 'sender-3'),
    new Message('4', 'subject-4', 'this is the fourth message', 'sender-4'),
    new Message('5', 'subject-5', 'this is the fifth message', 'sender-5'),
  ];

  constructor() {}

  ngOnInit(): void {}

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
