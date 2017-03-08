"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('../hero.service');
var app_component_1 = require('../app.component');
var LoginComponent = (function () {
    function LoginComponent(heroService, router, app) {
        this.heroService = heroService;
        this.router = router;
        this.app = app;
    }
    LoginComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService
            .getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    LoginComponent.prototype.goLogin = function () {
        if (!this.formLogin || !this.formPassword) {
            this.formLogin = '';
            this.formPassword = '';
            this.app.logged = false;
            console.log('Error!');
            this.errorMessage = 'Niepoprawna nazwa uzytkownika lub haslo!';
            return;
        }
        else {
            for (var _i = 0, _a = this.heroes; _i < _a.length; _i++) {
                var login = _a[_i];
                if (login.name === this.formLogin) {
                    this.app.logged = true;
                    var link = ['/dashboard'];
                    this.router.navigate(link);
                    this.errorMessage = '';
                    return;
                }
            }
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router, app_component_1.AppComponent])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map