import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.css',
  ]
})
export class ContactComponent {
  count!: number;
  constructor(private titleService: Title) {
    this.titleService.setTitle('MKS | Contact')
  }

}
