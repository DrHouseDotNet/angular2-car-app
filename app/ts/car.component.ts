import {Component} from 'angular2/core'

interface Car {
    id: number;
    brand: string;
    model: string;
}

@Component({
    selector: 'my-car',
    templateUrl:'app/view/car-detail.html'
})


export class CarComponent {
    public title: string = "Cadastro de veículos";
    public car: Car = {
        id: 1,
        brand: 'BMW',
        model: 'X6'
    }
}