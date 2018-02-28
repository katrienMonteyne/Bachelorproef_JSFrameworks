import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // hier moet de service publiek staan, want we zullen hem gebruiken in een template
  constructor(public messageService : MessageService) { }

  ngOnInit() {
  }

}
