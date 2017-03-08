import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input  }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Ng2DropdownModule } from 'ng2-material-dropdown';

import { Hero }                from '../../hero';
import { HeroService }         from '../../services/hero/hero.service';;

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  roles:string[] = ['Developer', 'QA', 'Team Leader'];
  
  @Input() heroId: number;
  
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.heroId = -1;
  }

  public loadComponent(): void {
    console.log("Jestem !"+ this.heroId);
    if(this.heroId>-1)
    {
      this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+this.heroId))
        .subscribe(hero => this.hero = hero);
    }
    else
    {
      this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);     
    }
  }

  ngOnInit(): void {
   this.loadComponent()
       
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
