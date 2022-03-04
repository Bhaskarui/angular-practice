import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { LogoutPageComponent } from './component/logout-page/logout-page.component';
import { ProductsComponent } from './component/products/products.component';
import { RegisterComponent } from './component/register/register.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'product', component:ProductComponent},
  {path: 'directives', component:DirectivesComponent},
  {path: 'home', component:HomeComponent},
  {path: 'logout', component:LogoutPageComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'employees', component:EmployeeDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
