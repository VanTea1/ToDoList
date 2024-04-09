import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
import { Todo } from 'src/app/models/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent {

  todos!: Todo[];
  isEdit : boolean = false;
  
  archivedTodosForInit: Todo[] = [
    {
      content: 'archived first task',
      completed: false
    },
    {
      content: 'archived second task',
      completed: true
    }
  ];

    todosForInit : Todo[]= [
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
    ];
  inputTodo: string = "";
  isVisibleEdit: boolean[] = []


  archivedTodos: any[] = [];


  constructor(private router: Router, private localStorageService: LocalStorageService) {

  }

  ngOnInit(): void {
    if (!this.localStorageService.getData('todos')) {
   this.localStorageService.saveData('todos', this.todosForInit);
    this.localStorageService.saveData('arch', this.archivedTodosForInit);
    }
 
    this.todos = this.localStorageService.getData('todos');
    this.archivedTodos = this.localStorageService.getData('arch');

      this.isVisibleEdit = this.todos.map(() => false);
  }


  toggleEdit(i: number) {
    this.isEdit = !this.isEdit;
    this.isVisibleEdit[i] = !this.isVisibleEdit[i];
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
    this.localStorageService.saveData('todos', this.todos)
  }


  addTodo() {
    if (this.inputTodo != "") {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      })

    }
    this.inputTodo = "";
    this.localStorageService.saveData('todos', this.todos)
  }

  delFinishedTodos() {
    this.todos = this.todos.filter(todo => !todo.completed);
    this.localStorageService.saveData('todos', this.todos);
  }

  archiveTodo(id: number) {
    if(this.isEdit==false)
      {
        const archivedTodo = this.todos[id];
        this.archivedTodos.push(archivedTodo);
        this.todos.splice(id, 1);
    
        this.localStorageService.saveData('todos', this.todos);
        this.localStorageService.saveData('arch', this.archivedTodos);
      }
  }

  routeArchive(){
    this.router.navigate(['/archive']);  
  }
}
