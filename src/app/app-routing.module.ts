import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeightingComponent } from './weighting/weighting.component';
import { AccasamentoComponent } from './location-cell-list/accasamento.component';

const routes: Routes = [
  {path: 'accasation', component: AccasamentoComponent},
  {path: 'weights', component: WeightingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
