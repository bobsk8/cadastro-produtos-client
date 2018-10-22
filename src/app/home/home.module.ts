import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ParceiroComponent } from '../parceiro/parceiro.component';
import { CategoriasComponent } from '../categorias/categorias.component';
import { FiltroComponent } from '../components/filtro/filtro.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSliderModule,
    MatSelectModule
  ],
  declarations: [
    HomeComponent,
    ParceiroComponent,
    CategoriasComponent,
    FiltroComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
