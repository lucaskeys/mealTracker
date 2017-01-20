import { Component } from '@angular/core';
import { Log } from './log.model';

@Component({
    selector: 'app-root',
    template: `
    <div class="container">
      <h1>Oops I ate it again!</h1>
      <log-list [childLogList]="myLogList"></log-list>
    </div>
  `
})

export class AppComponent {
  currentLog = null;

  myLogList: Log[] = [
    new Log("Pizza", "I couldnt help myself", 1000),
    new Log("Vegetables", "I am eating the food my food eats", 50),
    new Log("Tilapia", "Finally a healthy choice I like", 240),
  ];

  editLog(log) {
    this.currentLog = log;
  }

  editDone() {
    this.currentLog = null;
  }

  createLog() {

  }
}
