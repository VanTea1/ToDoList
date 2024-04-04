
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.less']
})
export class TodoEditComponent {

     @Input() value:string = "";
    @Output() valueChange = new EventEmitter<string>();
    onValueChange(model: string){
         
        this.value = model;
        this.valueChange.emit(model);
    }
}
