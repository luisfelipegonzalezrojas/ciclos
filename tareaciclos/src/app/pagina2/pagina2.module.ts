import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pagina2RoutingModule } from './pagina2-routing.module';
//import { Pagina2Component } from './pagina2.component';
import { VistaComponent } from './vista/vista.component';


@NgModule({
  declarations: [
    
    VistaComponent
  ],
  imports: [
    CommonModule,
    Pagina2RoutingModule
  ]
})
export class Pagina2Module { }
