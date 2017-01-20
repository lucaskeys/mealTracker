import { Component } from '@angular/core';
import { Log } from './log.model';

@Component({
    selector: 'app-root',
    template: `
    <div class="container">
      <div class="jumbotron">
        <h1>Oops I Ate it Again!</h1>
        <h4>The Ultimate Meal Log</h4>
      </div>
      <log-list [childLogList]="myLogList" (clickSender)="editLog($event)"></log-list>
      <edit-log [childLogSelected]="currentLog" (doneEditingSender)="editDone()"></edit-log>
      <new-log (createLogSender)="createLog($event)"></new-log>
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

  healthyOrNnot(caloriesPerMeal: Log) {
    if(caloriesPerMeal.calories < 500) {
      return caloriesPerMeal.lowCalorie = true;
    } else {
      return caloriesPerMeal.lowCalorie = true;
    }
  }

  editLog(log) {
    this.currentLog = log;
  }

  editDone() {
    this.currentLog = null;
  }

  createLog(newLog: Log) {
    this.myLogList.push(newLog);
  }
}
