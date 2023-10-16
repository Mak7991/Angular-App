import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoUpdate: EventEmitter<Todo> = new EventEmitter()
  @Output() todoDone: EventEmitter<Todo> = new EventEmitter()

  constructor() { }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('on click runing');
  }
  
  onUpdate(todo: Todo) {
    this.todoUpdate.emit(todo);
    console.log('update is running')
  }
  toggleDone(todo: Todo) {
    this.todoDone.emit(todo);
    console.log('done')
  }
}
