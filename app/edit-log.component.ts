import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'edit-log',
  template: `
  <div>
    <div *ngIf="childLogSelected">
    <h3>Change Log (Come'on...Done lie to me!)</h3>
    <div class="form-group">
      <label>Meal</label>
      <input [(ngModel)]="childLogSelected.meal">
    </div>
    <div class="form-group">
      <label>Details</label>
      <input [(ngModel)]="childLogSelected.details">
    </div>
    <div class="form-group">
      <label>Calorie Count</label>
      <input [(ngModel)]="childLogSelected.calories">
    </div>
    <button (click)="doneEditing()">Done</button>
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
