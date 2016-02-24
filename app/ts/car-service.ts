import {Car} from './car'
import {Cars} from './mock-car'

export class CarService {
    getCars(): Promise<Car[]> {
        return new Promise<Car[]>(resolve => setTimeout(() => resolve(Cars), 2000));
    }

    getCar(id: number): Promise<Car> {
        return Promise.resolve(Cars.filter(function(car) {
            return car.id === id;
        })[0]);
    }
}
