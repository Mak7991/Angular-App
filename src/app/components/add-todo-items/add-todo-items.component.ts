import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo-items',
  templateUrl: './add-todo-items.component.html',
  styleUrls: ['./add-todo-items.component.css'],
})
export class AddTodoItemsComponent {
  title!: string;
  description!: string;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo = {
      id: Math.floor(Math.random()*100000),
      title: this.title,
      description: this.description,
      active: true,
    };
    this.addTodo.emit(todo);
  }
}
