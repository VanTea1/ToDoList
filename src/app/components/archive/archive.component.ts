import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
import { Todo } from 'src/app/models/todos';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.less']
})
export class ArchiveComponent {

  archivedData: Todo[] = [];
  todosData: Todo[] = [];

  constructor(private router: Router, private localStorageService:LocalStorageService) {

  }

  ngOnInit() {
    this.todosData = this.localStorageService.getData('todos')
    this.archivedData = this.localStorageService.getData('arch');
  }


  deleteTodo(id: number) {
    this.archivedData = this.archivedData.filter((v, i) => i !== id);
     this.localStorageService.saveData('arch', this.archivedData);
  }
  recoverTodo(id: number) {
    const recoveredTodo = this.archivedData[id];
    this.archivedData.splice(id, 1);
    this.todosData.push(recoveredTodo);
    
        this.localStorageService.saveData('todos', this.todosData);
        this.localStorageService.saveData('arch', this.archivedData);
  }

  routeTodo() {
    this.router.navigate(['/todo']);
  }
}
