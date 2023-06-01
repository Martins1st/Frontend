import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { RouterModule } from "@angular/router";
import { RegistrarComponent } from './registrar/registrar.component';
import { AuthService } from "src/app/core/services-api/auth.service";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        AuthRoutingModule,
        RouterModule
    ],
  declarations: [
    LoginComponent,
    RegistrarComponent
  ],
  exports: [
  ],
  providers:[AuthService]
})
export class AuthModule{ }

