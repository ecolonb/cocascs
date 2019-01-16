import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: 'notifications',
    loadChildren: './notifications/notifications.module#NotificationsPageModule'
  },
  {
    path: 'messages',
    loadChildren: './messages/messages.module#MessagesPageModule'
  },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'cocas', loadChildren: './cocas/cocas.module#CocasPageModule' },
  { path: 'registry', loadChildren: './registry/registry.module#RegistryPageModule' },
  { path: 'recovery-password', loadChildren: './recovery-password/recovery-password.module#RecoveryPasswordPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
