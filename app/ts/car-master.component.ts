import {Component, OnInit} from "angular2/core";
import {Car} from "./car";
import {CarDetailComponent} from "./car-detail.component";
import {Router} from "angular2/router";
import {CarService} from "./car-service";

@Component({
    templateUrl: "app/view/car-master.html",
    directives: [CarDetailComponent],
})

export class CarMasterComponent implements OnInit {
    public title: string = "Cadastro de veículos";
    public cars: Car[] = [];

    constructor(private _carService: CarService, private _router: Router) { }

    ngOnInit() {
        this._carService.getCars()
            .subscribe(data => this.cars = data, error => console.log(error));
    }

    public onSelect(car: Car): void {
        this._router.navigate(["CarDetail", { id: car.Id }]);
    }
}

