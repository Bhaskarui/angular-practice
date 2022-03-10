import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { FiitersPipe } from './common/fiiters.pipe';
import { NgxSpinnerModule } from "ngx-spinner";
import { LogoutPageComponent } from './component/logout-page/logout-page.component';
import { RegisterComponent } from './component/register/register.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ApiService } from './service/api.service';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DirectivesComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FiitersPipe,
    LogoutPageComponent,
    RegisterComponent,
    EmployeeDashboardComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
