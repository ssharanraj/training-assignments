"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.LifecycleComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LifecycleComponent = /** @class */ (function () {
    function LifecycleComponent(lifeCycleService) {
        this.lifeCycleService = lifeCycleService;
        this.countries = [];
        this.states = ['Please select your country first'];
    }
    LifecycleComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.loadData();
    };
    LifecycleComponent.prototype.createForm = function () {
        this.formGroup = new forms_1.FormGroup({
            fullname: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            country: new forms_1.FormControl('', forms_1.Validators.required),
            state: new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    LifecycleComponent.prototype.loadData = function () {
        this.timestamp = new Date();
        this.countries = this.lifeCycleService.getCountries();
        this.countries.unshift('Select your Country');
    };
    LifecycleComponent.prototype.onSelectingCountry = function (country) {
        this.updateFormcontrol('country', country);
        this.states = __spreadArrays(['Select your State'], this.lifeCycleService.getStates(country));
    };
    LifecycleComponent.prototype.onSelectingState = function (state) {
        this.updateFormcontrol('state', state);
    };
    LifecycleComponent.prototype.buttonDisable = function () {
        if (!this.formGroup.get('fullname').errors && (this.formGroup.get('fullname').touched || this.formGroup.get('fullname').dirty) &&
            !this.formGroup.get('email').errors && (this.formGroup.get('email').touched || this.formGroup.get('email').dirty) &&
            !this.formGroup.get('country').errors && (this.formGroup.get('country').touched || this.formGroup.get('country').dirty) &&
            !this.formGroup.get('state').errors && (this.formGroup.get('state').touched || this.formGroup.get('state').dirty)) {
            return false;
        }
        return true;
    };
    LifecycleComponent.prototype.updateFormcontrol = function (field, value) {
        if (value === 'Select your Country' || value === 'Select your State') {
            this.formGroup.get(field).patchValue('');
            this.formGroup.get(field).markAsUntouched();
        }
        else {
            this.formGroup.get(field).patchValue(value);
            this.formGroup.get(field).markAsDirty();
            this.formGroup.get(field).markAsTouched();
        }
    };
    LifecycleComponent.prototype.submit = function () {
        alert('Name: ' + this.formGroup.get('fullname').value + '\n' +
            'Email: ' + this.formGroup.get('email').value + '\n' +
            'Country: ' + this.formGroup.get('country').value + '\n' +
            'State: ' + this.formGroup.get('state').value);
    };
    LifecycleComponent = __decorate([
        core_1.Component({
            selector: 'app-lifecycle',
            templateUrl: './lifecycle.component.html'
        })
    ], LifecycleComponent);
    return LifecycleComponent;
}());
exports.LifecycleComponent = LifecycleComponent;
