import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';


@Component({
    selector: 'log-list',
    template: `
  <h4>Filter Logs</h4>
  <select class="form-control select-menu" (change)="onChange($event.target.value)">
      <option value="allMeals" selected="selected">All Meals</option>
      <option value="highCalorieMeal">What you shouldn't be eating..(> 500 cal)</option>
      <option value="lowCalorieMeal">What you should be eating! (< 500 cal)</option>
  </select>
  <table class="table">
    <caption class="table-cap"><h3>My Logs</h3></caption>
    <thead class="table-titles">
      <th>Meal</th>
      <th>Meal Thoughts</th>
      <th class="calories-col">Calories</th>
      <th class="edit-col">Edit</th>
    </thead>
    <tbody>
      <tr *ngFor="let log of childLogList | healthy:filterByHealthyOrNot">
      <td><span [class]="highCalorieMeal(log)"></span>{{log.meal}}</td>
      <td>{{log.details}}</td>
      {{isItHealthy(log)}}
      <td>{{log.calories}} cal</td>
      <td><button class="btn btn-default" (click)="editButton(log)">Edit Log</button></td>
      </tr>
      </tbody>
  </table>
  `
})

export class LogListComponent {
    @Input() childLogList: Log[];
    @Output() clickSender = new EventEmitter();

    filterByHealthyOrNot: string = "allMeals";

    isItHealthy(mealEaten: Log) {
        if (mealEaten.calories < 500) {
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

    highCalorieMeal(meal: Log) {
        if (meal.calories > 500) {
            return "glyphicon glyphicon-remove";
        } else {
            return "glyphicon glyphicon-leaf";
        }
    }
}
