import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ClienteRoutingModule } from "./cliente-routing.module";
import { ClienteService } from "src/app/core/services-api/cliente.service";
import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { ClienteAdicionarComponent } from './cliente-adicionar/cliente-adicionar.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ClienteRoutingModule,
        RouterModule
    ],
  declarations: [
  
    ClienteListarComponent,
       ClienteAdicionarComponent,
       ClienteEditarComponent
  ],
  exports: [
  ],
  providers:[ClienteService]
})
export class ClienteModule{ }

