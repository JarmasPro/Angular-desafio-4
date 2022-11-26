import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescripcionComponent } from './componentes/descripcion/descripcion.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'descripcion/:id',
    component: DescripcionComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
