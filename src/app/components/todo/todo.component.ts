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
  isVisibleEdit: boolean[] = []

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
      {
        content: 'third task',
        completed: true
      },
      {
        content: 'fourth task',
        completed: true
      },
      {
        content: 'overflow task',
        completed: true
      },
      {
        content: 'overflow task',
        completed: false
      },
      {
        content: 'overflow task',
        completed: false
      },
      {
        content: 'overflow task',
        completed: true
      },
      {
        content: 'overflow task',
        completed: false
      },
      {
        content: 'overflow task',
        completed: true
      },
      {
        content: 'overflow task',
        completed: false
      },
      {
        content: 'overflow task',
        completed: true
      },
    ],
      this.isVisibleEdit = this.todos.map(() => false);
  }


  toggleEdit(i: number) {
    this.isVisibleEdit[i] = !this.isVisibleEdit[i];
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
