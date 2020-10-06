"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var modal_1 = require("ngx-bootstrap/modal");
var app_component_1 = require("./app.component");
var greetings_component_1 = require("./greetings/greetings.component");
var timer_component_1 = require("./timer/timer.component");
var enumgenerics_component_1 = require("./enumgenerics/enumgenerics.component");
var directives_component_1 = require("./directives/directives.component");
var databinding_component_1 = require("./databinding/databinding.component");
var lifecycle_component_1 = require("./lifecycle/lifecycle.component");
var interaction_component_1 = require("./interaction/interaction.component");
var dep_injection_component_1 = require("./dep-injection/dep-injection.component");
var welcome_component_1 = require("./welcome/welcome.component");
var routes = [
    { path: '', component: welcome_component_1.WelcomeComponent },
    { path: 'interface', component: timer_component_1.TimerComponent },
    { path: 'enum', component: enumgenerics_component_1.EnumgenericsComponent },
    { path: 'access-modifier', component: greetings_component_1.GreetingsComponent },
    { path: 'directives', component: directives_component_1.DirectivesComponent },
    { path: 'data-binding', component: databinding_component_1.DatabindingComponent },
    { path: 'lifecycle-hooks', component: lifecycle_component_1.LifecycleComponent },
    { path: 'component-interaction', component: interaction_component_1.InteractionComponent },
    { path: 'dependency-injection', component: dep_injection_component_1.DepInjectionComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                greetings_component_1.GreetingsComponent,
                timer_component_1.TimerComponent,
                enumgenerics_component_1.EnumgenericsComponent,
                directives_component_1.DirectivesComponent,
                databinding_component_1.DatabindingComponent,
                lifecycle_component_1.LifecycleComponent,
                interaction_component_1.InteractionComponent,
                dep_injection_component_1.DepInjectionComponent,
                welcome_component_1.WelcomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule,
                http_1.HttpClientModule,
                modal_1.ModalModule.forRoot(),
                router_1.RouterModule.forRoot(routes)
            ],
            providers: [modal_1.BsModalRef],
            bootstrap: [app_component_1.AppComponent],
            exports: [router_1.RouterModule]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
