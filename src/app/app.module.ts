import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { DocumentComponent } from './document/document.component';
import { ManualsyncComponent } from './manualsync/manualsync.component';
import { SettingComponent } from './setting/setting.component';
import { SystemposComponent } from './systempos/systempos.component';
import { SettingUserComponent } from './setting-user/setting-user.component';
import { SettingMarketplaceComponent } from './setting-marketplace/setting-marketplace.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderComponent,
    ProductComponent,
    CustomerComponent,
    DocumentComponent,
    ManualsyncComponent,
    SettingComponent,
    SystemposComponent,
    SettingUserComponent,
    SettingMarketplaceComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
