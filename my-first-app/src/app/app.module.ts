import { ServerComponent } from './server/server.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { Assignment3Component } from './assignment3/assignment3.component';
import { HPCComponent } from './hpc/hpc.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessalertComponent,
    Assignment2Component,
    Assignment3Component,
    HPCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
