import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClienteAdicionarComponent } from './cliente-adicionar/cliente-adicionar.component';
import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';


const routes: Routes = [
  {
    path: "listar",
    component: ClienteListarComponent,
  },
  {
    path: "adicionar",
    component: ClienteAdicionarComponent,
  },
  {
    path: "editar/:id",
    component: ClienteEditarComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule { }
