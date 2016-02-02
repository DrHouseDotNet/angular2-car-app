System.register(['./mock-car'], function(exports_1) {
    var mock_car_1;
    var CarService;
    return {
        setters:[
            function (mock_car_1_1) {
                mock_car_1 = mock_car_1_1;
            }],
        execute: function() {
            CarService = (function () {
                function CarService() {
                }
                CarService.prototype.getCars = function () {
                    return new Promise(function (resolve) { return setTimeout(function () { return resolve(mock_car_1.Cars); }, 2000); });
                };
                return CarService;
            })();
            exports_1("CarService", CarService);
        }
    }
});
//# sourceMappingURL=car-service.js.map