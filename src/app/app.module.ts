import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Asegúrate de importar correctamente
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    
  ],
  imports: [
    AppComponent,  // Solo importa el componente aquí, no lo declares
    BrowserModule,
    CommonModule
  ],
})
export class AppModule { }
