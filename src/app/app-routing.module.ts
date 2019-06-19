import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importando componentes de la ruta
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';
import { ServicesComponent } from './services/services.component'


//rutas de la aplicacion

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'models', component: ModelsComponent},
  {path: 'services', component: ServicesComponent},
  {path: '**', component: HomeComponent}, //este es para cuando alguien se pase de lanza lo regrese al home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
