import {Component} from 'angular2/core'
import {Car} from './car'
import {CarDetailComponent} from './car-detail.component'
import {Cars} from './mock-car'

@Component({
    selector: 'my-car',
    templateUrl: 'app/view/car-master.html',
    directives: [CarDetailComponent]
})

export class CarComponent {
    public title: string = "Cadastro de veículos";
    public cars: Car[] = Cars;
    public selectedCar: Car;

    public onSelect(car: Car): void {
        this.selectedCar = car;
    }
}