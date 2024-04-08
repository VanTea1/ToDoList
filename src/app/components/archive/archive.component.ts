import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoArchiveTransportService } from 'src/app/todo-archive-transport.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.less']
})
export class ArchiveComponent {

  archivedData: any[] = [];

  constructor(private router: Router, private archiveService: TodoArchiveTransportService) {

  }

  ngOnInit() {
    this.archivedData = this.archiveService.getArchive();
  }


  deleteTodo(id: number) {
    this.archivedData = this.archivedData.filter((v, i) => i !== id);
    this.archiveService.setArchive(this.archivedData);
  }


  routeTodo() {
    this.router.navigate(['/todo']);
  }
}
