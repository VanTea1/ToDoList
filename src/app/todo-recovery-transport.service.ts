import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoRecoveryTransportService {

  recoveredTodos: any[] = [];

  constructor() { }

  getRecovery(): any[] {
    return this.recoveredTodos;
  }

  setRecovery(recoveredData: any[]): void {
    this.recoveredTodos = recoveredData;
  }
}