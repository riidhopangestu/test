import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentComponent } from './document/document.component';
import { ManualsyncComponent } from './manualsync/manualsync.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { SettingMarketplaceComponent } from './setting-marketplace/setting-marketplace.component';
import { SettingUserComponent } from './setting-user/setting-user.component';
import { SystemposComponent } from './systempos/systempos.component';
import { ProducttableDetailComponent } from './producttable-detail/producttable-detail.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/dashboard', pathMatch: 'full' 
  },
  {
    path: 'dashboard', component: DashboardComponent, title: "Dashboard - AturToko"
  },
  {
    path: 'order', component: OrderComponent, title: "Order - AturToko"
  },
  {
    path: 'product', component: ProductComponent, title: "Produk - AturToko" 
  },
  {
    path: 'product/:id', component: ProducttableDetailComponent, title: "Produk Detail - AturToko" 
  },
  {
    path: 'customer', component: CustomerComponent, title: "Pelanggan - AturToko" 
  },
  {
    path: 'document', component: DocumentComponent, title: "Dokumen - AturToko" 
  },
  {
    path: 'manualsync', component: ManualsyncComponent, title: "Manual Sync - AturToko"
  },
  {
    path: 'setting-user', component: SettingUserComponent, title: "Pengaturan Pengguna - AturToko"
  },
  {
    path: 'setting-marketplace', component: SettingMarketplaceComponent, title: "Pengaturan Marketplace - AturToko"
  },
  {
    path: 'systempos', component: SystemposComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
