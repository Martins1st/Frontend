import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services-api/auth.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {


  form = new FormGroup({
    login: new FormControl(null),
    senha: new FormControl(null),
    confirmarSenha: new FormControl(null)
  })

  constructor(private readonly authService: AuthService,
    private readonly router: Router,
    private readonly loadingService: LoadingService,
    private readonly alertService: AlertService) { }

  ngOnInit(): void {
  }


  registrar() {
    this.loadingService.ativar();
    this.authService.Registrar(this.form.value).subscribe(
      (response) => {
        this.loadingService.desativar();
        this.alertService.AlertaSucessoComTimerPersonalizada("Conta Criada Com Sucesso!", "você será redirecionado em breve");
        setTimeout(() => {
          this.router.navigateByUrl("/auth/login");
        }, 2520);
       
      },
      (error) => {
        this.loadingService.desativar();
      }
    );
  }

}
