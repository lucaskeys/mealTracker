import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'edit-log',
  template: `
  <div class="log-edit">
    <div *ngIf="childLogSelected">
    <h3>Change Log (Come'on...Done lie to me!)</h3>
    <div class="form-group">
      <label>Meal</label>
      <input class="user-meal" [(ngModel)]="childLogSelected.meal">
    </div>
    <div class="form-group">
      <label>Details</label>
      <textarea class="form-control" rows="3" [(ngModel)]="childLogSelected.details"></textarea>
    </div>
    <div class="form-group">
      <label>Calorie Count</label>
      <input class="user-calories" [(ngModel)]="childLogSelected.calories">
    </div>
    <button class="edit-button btn btn-default" (click)="doneEditing()">Done</button>
    </div>
  </div>
  `
})

export class EditLogComponent {
  @Input() childLogSelected: Log;
  @Output() doneEditingSender = new EventEmitter();

  doneEditing() {
    this.doneEditingSender.emit();
  }
}
