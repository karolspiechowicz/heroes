import { Component, OnInit }          from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
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
