import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';

import { Hero }                from '../../hero';
import { HeroService }         from '../../services/hero/hero.service';
import { AppComponent }         from '../../app.component';

@Component({
  moduleId: module.id,
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit{

  heroes: Hero[];
  formLogin: string;
  formPassword: string; 
  errorMessage: string;

  constructor(
    private heroService: HeroService,
    private router: Router,
    private app: AppComponent) { }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  goLogin(): void {
    if ( !this.formLogin || !this.formPassword ) {
      this.formLogin = '';
      this.formPassword = '';
      this.app.logged = false;
      console.log('Error!');
      this.errorMessage = 'Niepoprawna nazwa uzytkownika lub haslo!';
      return;
    } else {
      for(let login of this.heroes)
      {
        if ( login.name === this.formLogin ){
            this.app.logged = true;
            let link = ['/dashboard'];
            this.router.navigate(link);
            this.errorMessage = '';
            return;
        }
      }
    }

  }
}
