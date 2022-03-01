import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'product', component:ProductComponent},
  {path: 'directives', component:DirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
