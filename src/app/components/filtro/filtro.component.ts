import { Component, OnInit } from '@angular/core';
import { Filtro } from './filtro';
import {coerceNumberProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  
  filtro: Filtro = {};
  nacionalidades = [
    {value: 'alemanha', viewValue: 'Alemanha'},
    {value: 'australia', viewValue: 'Austrália'},
    {value: 'belgica', viewValue: 'Bélgica'}
  ];
  estilos = [
    {value: 'american', viewValue: 'American Ale'},
    {value: 'belgian', viewValue: 'Belgian and French Ale'},
    {value: 'bock', viewValue: 'Bock'}
  ];
  armargores = [
    {value: 'baixo', viewValue: 'Baixo'},
    {value: 'moderado', viewValue: 'Moderado'},
    {value: 'alto', viewValue: 'Alto'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
