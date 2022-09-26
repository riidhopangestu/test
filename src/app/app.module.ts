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
import { SystemposComponent } from './systempos/systempos.component';
import { SettingUserComponent } from './setting-user/setting-user.component';
import { SettingMarketplaceComponent } from './setting-marketplace/setting-marketplace.component';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProducttableDetailComponent } from './producttable-detail/producttable-detail.component';
import { SpeedDialFabComponent } from './speed-dial-fab/speed-dial-fab.component';


const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY', // this is how your date will be parsed from Input
  },
  display: {
    dateInput: 'DD MMMM YYYY', // this is how your date will get displayed on the Input
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD MMMM YYYY',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderComponent,
    ProductComponent,
    CustomerComponent,
    DocumentComponent,
    ManualsyncComponent,
    SystemposComponent,
    SettingUserComponent,
    SettingMarketplaceComponent,
    DialogComponent,
    ProducttableDetailComponent,
    SpeedDialFabComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
