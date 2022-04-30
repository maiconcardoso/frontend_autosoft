import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SharedModule } from './shared-module/shared.module';
import { CustomerModule } from './components/customer/customer.module';
import { LaborModule } from './components/labor/labor.module';
import { OrderModule } from './components/order/order.module';
import { ProductModule } from './components/product/product.module';
import { ProviderModule } from './components/provider/provider.module';
import { TemplateModule } from './components/template/template.module';
import { UserModule } from './components/user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { CustomerCrudComponent } from './views/customer-crud/customer-crud.component';
import { ProviderCrudComponent } from './views/provider-crud/provider-crud.component';
import { LaborCrudComponent } from './views/labor-crud/labor-crud.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderCrudComponent } from './views/order-crud/order-crud.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    CustomerCrudComponent,
    ProviderCrudComponent,
    LaborCrudComponent,
    ProductCrudComponent,
    NotfoundComponent,
    LoginComponent,
    HomeComponent,
    OrderCrudComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TooltipModule.forRoot(),
    SharedModule,
    CustomerModule,
    LaborModule,
    OrderModule,
    ProductModule,
    ProviderModule,
    TemplateModule,
    UserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [
    AuthService, AuthGuard
  ],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
