import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';


@Component({
  selector: 'log-list',
  template: `
  <select class="filter" (change)="onChange($event.target.value)">
  <option value="allMeals" selected="selected">All Meals</option>
  <option value="highCalorieMeal">What you shouldn't be eating..</option>
  <option value="lowCalorieMeal">What you should be eating!</option>
</select>

  <ul *ngFor="let log of childLogList | healthy:filterByHealthyOrNot">
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

  filterByHealthyOrNot: string = "allMeals";

  isItHealthy(mealEaten: Log) {
    if(mealEaten.calories < 500) {
      mealEaten.lowCalorie = true;
    } else {
      mealEaten.lowCalorie = false;
    }
  }

  onChange(filter) {
    this.filterByHealthyOrNot = filter;
  }


  editButton(logEdit: Log) {
    this.clickSender.emit(logEdit);
  }
}
