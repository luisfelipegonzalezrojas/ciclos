import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pagina1RoutingModule } from './pagina1-routing.module';
import { Pagina1Component } from './pagina1.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { VistaComponent } from './components/vista/vista.component';
import { Vista2Component } from './vista2/vista2.component';


@NgModule({
  declarations: [
    Pagina1Component,
    VistaComponent,
    Vista2Component
  ],
  imports: [
    CommonModule,
    Pagina1RoutingModule,
    FormsModule,
     MaterialModule

  ]
})
export class Pagina1Module { }
