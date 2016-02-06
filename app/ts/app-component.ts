import {Component} from 'angular2/core'
import {CarMasterComponent} from './car-master.component'

@Component({
    selector: 'car-app',
    templateUrl: 'app/view/app.html',
    directives: [CarMasterComponent]
})

export class AppComponent { }