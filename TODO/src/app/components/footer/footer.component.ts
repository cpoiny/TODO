import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


constructor(private router: Router) {}

isHomePage(): boolean {
  return this.router.url === "/home";
}

isEditPage(): boolean {
  console.log("verif",this.router.url=== "/add/todo.id");
  return this.router.url.includes('/add');
}

isHistoryPage(): boolean {
  return this.router.url === "/history";
}

}