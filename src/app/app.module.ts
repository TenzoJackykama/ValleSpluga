import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AccasamentoComponent } from './location-cell-list/accasamento.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeightingComponent } from './weighting/weighting.component';

@NgModule({
  declarations: [
    AppComponent,
    AccasamentoComponent,
    NavbarComponent,
    WeightingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // Importa BrowserAnimationsModule
    MatFormFieldModule,      // Per mat-form-field
    MatSelectModule,         // Per mat-select
    MatInputModule 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
