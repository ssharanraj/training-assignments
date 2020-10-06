import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { TimerComponent } from './timer/timer.component';
import { EnumgenericsComponent } from './enumgenerics/enumgenerics.component';
import { DirectivesComponent } from './directives/directives.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { InteractionComponent } from './interaction/interaction.component';
import { DepInjectionComponent } from './dep-injection/dep-injection.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'interface', component: TimerComponent },
  { path: 'enum', component: EnumgenericsComponent },
  { path: 'access-modifier', component: GreetingsComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'data-binding', component: DatabindingComponent },
  { path: 'lifecycle-hooks', component: LifecycleComponent },
  { path: 'component-interaction', component: InteractionComponent },
  { path: 'dependency-injection', component: DepInjectionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    TimerComponent,
    EnumgenericsComponent,
    DirectivesComponent,
    DatabindingComponent,
    LifecycleComponent,
    InteractionComponent,
    DepInjectionComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppModule { }
