import { BrowserModule, HAMMER_GESTURE_CONFIG  } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './main/login/login.component';
import { FooterComponent } from './main/shared/footer/footer.component';
import { HeaderComponent } from './main/shared/header/header.component';
import { MenuComponent } from './main/shared/header/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
