import { Component, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'new-log',
  template: `
  <div class="container">
    <h3>What did you eat?</h3>
    <div class="form-group">
     <label>Meal</label>
     <input class="user-meal" #newMeal>
   </div>
   <div class="form-group">
     <label>Thoughts?</label>
     <textarea class="form-control" rows="3" #newDetails></textarea>
   </div>
   <div class="form-group">
     <label>How many calories?</label>
     <input class="user-calories" #newCalories>
   </div>
   <button class="add-button btn btn-default" (click)="createLog(newMeal.value, newDetails.value, newCalories.value)">Add to your logs</button>
   </div>
  `
})

export class NewLogComponent {
@Output() createLogSender = new EventEmitter();

createLog(meal: string, details: string, calories: number) {
  var newLog: Log = new Log(meal, details, calories);
  this.createLogSender.emit(newLog);
  }
}
