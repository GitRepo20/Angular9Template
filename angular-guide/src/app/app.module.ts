import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { EventinfoComponent } from './eventinfo/eventinfo.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { Assignment2databindingComponent } from './assignment2databinding/assignment2databinding.component';
import { NgIfexampleComponent } from './ng-ifexample/ng-ifexample.component';
import { NgIfwithElseexampleComponent } from './ng-ifwith-elseexample/ng-ifwith-elseexample.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    EventinfoComponent,
    TwowaybindingComponent,
    Assignment2databindingComponent,
    NgIfexampleComponent,
    NgIfwithElseexampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
