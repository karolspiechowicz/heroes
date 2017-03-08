import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data/in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';
import { HeroService }          from './services/hero/hero.service';
import { HeroSearchComponent }  from './components/hero-search/hero-search.component';
import { LoginComponent }       from './components/login/login.component';
import { NewCmpComponent } from './components/new-cmp/new-cmp.component';
import { Ng2DropdownModule } from 'ng2-material-dropdown';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    Ng2DropdownModule
    
    
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    LoginComponent,
    NewCmpComponent,
    
    
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
