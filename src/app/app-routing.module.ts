import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { CartComponent } from './component/cart/cart.component';
import { LogoutPageComponent } from './component/logout-page/logout-page.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ProductsComponent } from './component/products/products.component';
import { RegisterComponent } from './component/register/register.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ProductComponent } from './product/product.component';
import { ScienceComponent } from './science/science.component';
import { HomeComponent } from './shared/home/home.component';
import { TechComponent } from './tech/tech.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path: 'headline', component:TopHeadlineComponent},
  {path: 'tech-news', component:TechComponent},
  {path: 'business-news', component:BusinessComponent},
  {path: 'science', component:ScienceComponent},
  {path:'products', component:ProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'product', component:ProductComponent},
  {path: 'directives', component:DirectivesComponent},
  {path: 'home', component:HomeComponent},
  {path: 'logout', component:LogoutPageComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'employees', component:EmployeeDashboardComponent},
  
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
