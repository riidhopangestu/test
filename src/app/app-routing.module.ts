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
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { BoardUserComponent } from './auth/board-user/board-user.component';
import { BoardModeratorComponent } from './auth/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './auth/board-admin/board-admin.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/login', pathMatch: 'full' 
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
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
