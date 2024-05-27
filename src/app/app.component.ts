import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'list-app';
  todos = [
    {
      id: 1,
      task: 'first todo',
      completed: false,
    },
    {
      id: 2,
      task: 'fisecondrst todo',
      completed: true,
    },

  ]

  updateToDo(e: unknown, todo: Todo) {
    console.log(e, todo)
  }

  deleteTodo(e: unknown, id: Todo['id']){
      console.log(e, id)
  }
}
