import { newArray } from '@angular/compiler/src/util';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { task } from '../ITask';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: task[] = [];
  idCounter: number = 0;
  addItem(newContent: string) {
    this.todos.push({
      id: ++this.idCounter,
      content: newContent
    });
  }
  deleteItem(itemId: number) {
    this.todos = this.todos.filter(item => item.id !== itemId);
  }
}
