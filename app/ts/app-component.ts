import {Component} from 'angular2/core';
import {CarMasterComponent} from './car-master.component';
import {CarDetailComponent} from "./car-detail.component";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'car-app',
    templateUrl: 'app/view/app.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: "/", name: "Cars", component: CarMasterComponent, useAsDefault: true },
    { path: "car/:id", name: "CarDetail", component: CarDetailComponent }
])

export class AppComponent { }