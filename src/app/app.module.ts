import { BrowserModule, HAMMER_GESTURE_CONFIG  } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [ { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
