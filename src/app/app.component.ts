import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentItem = [];
  // @Output() newItemEvent = new EventEmitter<string>();
  alert: string;

  addNewItem(value: string): void {
    this.currentItem.push(value);
    console.log(value);
  }

}
