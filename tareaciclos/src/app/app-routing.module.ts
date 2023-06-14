import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:'',
  loadChildren: () => import('./pagina1/pagina1.module') .then(m=>m.Pagina1Module)
},
{
  path:'pagina2',
  loadChildren:() => import('./pagina2/pagina2.module') .then(m=>m.Pagina2Module)

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
