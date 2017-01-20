import { Component, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'new-log',
  template: `
  <div class="container">
    <h1>What did you eat?</h1>
    <div class="form-group">
     <label>Meal</label>
     <input #newMeal>
   </div>
   <div class="form-group">
     <label>Thoughts?</label>
     <input #newDetails>
   </div>
   <div class="form-group">
     <label>How many calories?</label>
     <input #newCalories>
   </div>
   <button class="add-button" (click)="createLog(newMeal.value, newDetails.value, newCalories.value)">Add to your logs</button>
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
