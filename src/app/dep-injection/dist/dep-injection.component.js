"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DepInjectionComponent = void 0;
var core_1 = require("@angular/core");
var DepInjectionComponent = /** @class */ (function () {
    function DepInjectionComponent(service, modalService) {
        this.service = service;
        this.modalService = modalService;
        this.cars = [];
    }
    DepInjectionComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    DepInjectionComponent.prototype.loadData = function () {
        this.cars.push('Volkswagen Jetta', 'Ford Mustang', 'Audi Q5', 'Jeep Wrangler', 'Chevrolet Silverado');
    };
    DepInjectionComponent.prototype.getServiceList = function (modal, serviceModal) {
        var _this = this;
        this.selectedCar = modal;
        modal = modal.replace(' ', '_');
        this.service.getServiceListForCar(modal).subscribe(function (res) {
            console.log('Mock Server Res', res);
            _this.serviceList = res.model_services;
            _this.modalRef = _this.modalService.show(serviceModal, { backdrop: 'static', keyboard: false });
        });
    };
    DepInjectionComponent = __decorate([
        core_1.Component({
            selector: 'app-dep-injection',
            templateUrl: './dep-injection.component.html',
            styleUrls: ['./dep-injection.component.css']
        })
    ], DepInjectionComponent);
    return DepInjectionComponent;
}());
exports.DepInjectionComponent = DepInjectionComponent;
