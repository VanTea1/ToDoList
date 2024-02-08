import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent {

  todos!: Todo[];
  inputTodo: string = "";
  constructor(){

  }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'first task',
        completed: false
      },
      {
        content: 'second task',
        completed: true
      },
    ]
  }

  toggleDone(id: number){
    this.todos.map((v, i) => {
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter((v, i) => i !== id);

  }

  addTodo(){
    if(this.inputTodo != "")
    {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      })
  
    }
    this.inputTodo = "";
  }

}
