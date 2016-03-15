import {Car} from "./car";
import {Cars} from "./mock-car";
import {Injectable} from "angular2/core";
import {Http, Response, Headers, RequestOptions} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class CarService {
    constructor(private _http: Http) { }
    private _apiUrl: string = "http://localhost:5000/api/";

    getCars() {
        return this._http.get(this._apiUrl + "cars")
            .map(res => res.json())
            .catch(this.throwError);
    }


    getCar(id: number) {
        return this._http.get(this._apiUrl + "cars/:id".replace(":id", id.toString()))
            .map(res => res.json())
            .catch(this.throwError);
    }

    private throwError(response) {
        return Observable.throw(response.json().error || "Server error")
    }
}
