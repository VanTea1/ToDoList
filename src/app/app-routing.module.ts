import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { ArchiveComponent } from './components/archive/archive.component';

const routes: Routes = [  { path: '', redirectTo: '/todo', pathMatch: 'full' },
{ path: 'todo', component: TodoComponent},
{ path: 'archive', component: ArchiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
