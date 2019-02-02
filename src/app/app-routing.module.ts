import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './main/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'home', loadChildren: './main/home/home.module#HomeModule', canActivate: [AuthGuard] },
  { path: 'produtos', loadChildren: './main/product/product.module#ProductModule', canActivate: [AuthGuard] },
  { path: 'user', loadChildren: './main/user/user.module#UserModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
