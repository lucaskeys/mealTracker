import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { LogListComponent } from './log-list.component';
import { EditLogComponent } from  './edit-log.component';
import { NewLogComponent } from './new-log.component';

@NgModule({
    imports: [BrowserModule,
    FormsModule],
    declarations: [AppComponent, LogListComponent, EditLogComponent, NewLogComponent, CaloriesPipe],
    bootstrap: [AppComponent]
})

export class AppModule { }
