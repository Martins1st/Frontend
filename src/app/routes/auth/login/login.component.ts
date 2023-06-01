import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services-api/auth.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { JwtService } from 'src/app/core/services/jwt.service';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    login: new FormControl(null),
    senha: new FormControl(null)
  })

  constructor(private readonly authService: AuthService,
    private readonly router: Router,
    private readonly loadingService: LoadingService,
    private readonly alertService: AlertService,
    private readonly jwtService: JwtService) { }

  ngOnInit(): void {
  }

  login() {
    this.loadingService.ativar();
    console.log(this.form.value);
    this.authService.Login(this.form.value).subscribe(
      (response) => {
        this.loadingService.desativar();
        this.jwtService.salvarToken(response["data"]["token"]);
        this.alertService.AlertaSucessoComTimerPersonalizada("Login Realizado!", "Você será redirecionado em breve!");
        setTimeout(() => this.router.navigateByUrl("/cliente"), 2510);
      },
      (error) => { this.loadingService.desativar() },
    )
  }

}
