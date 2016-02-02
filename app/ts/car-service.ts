import {Car} from './car'
import {Cars} from './mock-car'

export class CarService {
    getCars(): Promise<Car[]> {
        return new Promise<Car[]>(resolve => setTimeout(() => resolve(Cars), 2000));
    }
}
