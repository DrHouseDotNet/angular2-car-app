import {Component, OnInit} from "angular2/core";
import {CarService} from "./car-service";
import {RouteParams} from "angular2/router";
import {Car} from "./car";


@Component({
    templateUrl: "app/view/car-detail.html",
})

export class CarDetailComponent implements OnInit {
    constructor(private _routeParams: RouteParams, private _carService: CarService) { }

    public car: Car;

    ngOnInit() {
        let id = <number><any>this._routeParams.get("id");
        this._carService.getCar(id).subscribe(data => this.car = data, error => console.log(error));
    }
}
