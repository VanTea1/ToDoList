import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todos';
import { TodoArchiveTransportService } from 'src/app/todo-archive-transport.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent {

  todos!: Todo[];
  inputTodo: string = "";
  isVisibleEdit: boolean[] = []


  archivedTodos: any[] = [];


  constructor(private router: Router, private archiveService: TodoArchiveTransportService) {

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

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }


  addTodo() {
    if (this.inputTodo != "") {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      })

    }
    this.inputTodo = "";
  }

  delFinishedTodos() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  archiveTodo(id: number) {
    const archivedTodo = this.todos[id];
    this.archivedTodos.push(archivedTodo);
    this.todos.splice(id, 1);

    this.archiveService.setArchive(this.archivedTodos);
  }

  routeArchive(){
    this.router.navigate(['/archive']);  
  }
}
