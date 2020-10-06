"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GreetingsComponent = void 0;
var core_1 = require("@angular/core");
var GreetingsComponent = /** @class */ (function () {
    function GreetingsComponent() {
    }
    GreetingsComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    GreetingsComponent.prototype.loadData = function () {
        this.greet = new Greetings('This is a private object', 'This is a public object', 'This is a protected object');
    };
    GreetingsComponent.prototype.accessGreetingClass = function () {
        var newGreet = new Greetings('This is a private object', 'This is a public object', 'This is a protected object(ext)');
        return newGreet.accessVariable();
    };
    GreetingsComponent = __decorate([
        core_1.Component({
            selector: 'app-greetings',
            templateUrl: './greetings.component.html',
            styleUrls: ['./greetings.component.css']
        })
    ], GreetingsComponent);
    return GreetingsComponent;
}());
exports.GreetingsComponent = GreetingsComponent;
var Greetings = /** @class */ (function () {
    function Greetings(msgA, msgB, msgC) {
        this.msgA = msgA;
        this.msgB = msgB;
        this.msgC = msgC;
    }
    Greetings.prototype.accessVariable = function () {
        return this.msgA + ' ' + this.msgB + ' ' + this.msgC;
    };
    return Greetings;
}());
