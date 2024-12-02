import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ObraComponent } from './components/obra/obra.component';
import { Obra2Component } from './components/obra2/obra2.component';
import { Obra3Component } from './components/obra3/obra3.component';
import { Obra4Component } from './components/obra4/obra4.component';
import { Obra5Component } from './components/obra5/obra5.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'obra1', component: ObraComponent },
  { path: 'obra2', component: Obra2Component },
  { path: 'obra3', component: Obra3Component },
  { path: 'obra4', component: Obra4Component },
  { path: 'obra5', component: Obra5Component },
   // Redirige cualquier otra ruta no definida a la página de inicio
   { path: '**', redirectTo: '', pathMatch: 'full' }
];
