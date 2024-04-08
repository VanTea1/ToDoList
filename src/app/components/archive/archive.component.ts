import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
import { TodoArchiveTransportService } from 'src/app/todo-archive-transport.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.less']
})
export class ArchiveComponent {

  archivedData: any[] = [];

  constructor(private router: Router, private archiveService: TodoArchiveTransportService, private localStorageService:LocalStorageService) {

  }

  ngOnInit() {

    this.archivedData = this.localStorageService.getData('arch');
  }


  deleteTodo(id: number) {
    this.archivedData = this.archivedData.filter((v, i) => i !== id);
    this.archiveService.setArchive(this.archivedData);
     this.localStorageService.saveData('arch', this.archivedData);
  }


  routeTodo() {
    this.router.navigate(['/todo']);
  }
}
