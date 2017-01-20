import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';


@Component({
  selector: 'log-list',
  template: `
  <ul *ngFor="let log of childLogList">
  <li>{{log.meal}}</li>
  <li>{{log.details}}</li>
  <li>{{log.calories}}</li>
  <button (click)="editButton(log)">Edit Log</button>
  </ul>
  `
})

export class LogListComponent {
  @Input() childLogList: Log[];
  @Output() clickSender = new EventEmitter();

  editButton(logEdit: Log) {
    this.clickSender.emit(logEdit);
  }
}
