import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/security/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/cliente/listar', pathMatch: 'full' },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(module => module.AuthModule),
  },
  {
    path: "cliente",
    loadChildren: () => import("./cliente/cliente.module").then(module => module.ClienteModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers:[AuthGuard],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
