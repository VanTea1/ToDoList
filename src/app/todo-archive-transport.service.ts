import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoArchiveTransportService {

  archivedTodos: any[] = [];

  constructor() { }

  getArchive(): any[] {
    return this.archivedTodos;
  }

  setArchive(archivedData: any[]): void {
    this.archivedTodos = archivedData;
  }
}
