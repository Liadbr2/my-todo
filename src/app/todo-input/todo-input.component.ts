import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  value: string = '';
  @Output() addToList = new EventEmitter<string>();
  add() {
    if (this.value) {
      this.addToList.emit(this.value);
      this.value = "";
    }
  }
}
