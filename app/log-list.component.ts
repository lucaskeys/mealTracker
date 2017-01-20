import { Component, Input } from '@angular/core';
import { Log } from './log.model';


@Component({
  selector: 'log-list',
  template: `
  <ul *ngFor="let log of childLogList">
  <li>{{log.meal}}</li>
  <li>{{log.details}}</li>
  <li>{{log.calories}}</li>
  </ul>
  `
})

export class LogListComponent {
  @Input() childLogList: Log[];
}
