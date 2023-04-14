import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: "add",
    component: AddComponent
  },
  {
    path: "add/:id",
    component: TodoCardComponent
  },
  {
    path: "history",
    component: HistoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
