System.register(["angular2/core", "./car-detail.component", "angular2/router", "./car-service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, car_detail_component_1, router_1, car_service_1;
    var CarMasterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (car_detail_component_1_1) {
                car_detail_component_1 = car_detail_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (car_service_1_1) {
                car_service_1 = car_service_1_1;
            }],
        execute: function() {
            CarMasterComponent = (function () {
                function CarMasterComponent(_carService, _router) {
                    this._carService = _carService;
                    this._router = _router;
                    this.title = "Cadastro de veículos";
                    this.cars = [];
                }
                CarMasterComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._carService.getCars()
                        .subscribe(function (data) { return _this.cars = data; }, function (error) { return console.log(error); });
                };
                CarMasterComponent.prototype.onSelect = function (car) {
                    this._router.navigate(["CarDetail", { id: car.Id }]);
                };
                CarMasterComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/view/car-master.html",
                        directives: [car_detail_component_1.CarDetailComponent],
                    }), 
                    __metadata('design:paramtypes', [car_service_1.CarService, router_1.Router])
                ], CarMasterComponent);
                return CarMasterComponent;
            })();
            exports_1("CarMasterComponent", CarMasterComponent);
        }
    }
});
//# sourceMappingURL=car-master.component.js.map