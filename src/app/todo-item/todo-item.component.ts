import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { task } from '../ITask';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() item: task = {
    content: "",
    id: 0
   };
  @Output() deleteFromList = new EventEmitter<number>();
  editEnabled: boolean = false;
  delete() {
    this.deleteFromList.emit(this.item.id);
  }

  isDone = true;
}
