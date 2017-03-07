import { Component, OnInit }          from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <div *ngIf="logged == true">
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{
  logged: boolean;
  title = 'Tour of Heroes';

 // constructor(logged: boolean){}
  ngOnInit(): void {
    this.logged = false;
  }
  
}
