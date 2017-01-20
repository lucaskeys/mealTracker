import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'app-root',
    template: `
    <div class="container">
      <h1>Oops I ate it again!</h1>
    </div>
  `
})

export class AppComponent {
  currentMeal = null;

  myMealList: Meal[] = [
    new Meal("Pizza", "I couldnt help myself", 1000),
    new Meal("Vegetables", "I am eating the food my food eats", 50),
    new Meal("Tilapia", "Finally a healthy choice I like", 240),
  ];

  editLog(currentLog) {
    this.currentMeal = currentLog;
  }

  editDone() {
    this.currentMeal = null;
  }

  createLog() {
    
  }
}
