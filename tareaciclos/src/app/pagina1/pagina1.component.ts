import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component {

  public nombre: string;
  public apellido: string;
  public DurationInSeconds=5;

  constructor(private _SnackBar: MatSnackBar,
    private Router: Router){
this.nombre = '';
this.apellido='';


  }
  openSnackBar() {
    this. _SnackBar. open('hola'+ this.nombre,'cerrar', {
      duration: this.DurationInSeconds * 1000,
    });
  }
  navegar(){
    this.Router.navigate(['/pagina2']);
  }
}
