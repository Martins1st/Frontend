import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { JwtService } from "../services/jwt.service";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private jwtService: JwtService) { }

  canLoad(route: Route, segments: UrlSegment[]) {
    return this.verificarToken();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.verificarToken();
  }

  verificarToken(): boolean {
    let token = this.jwtService.obterToken();
    if (token == null || token == "") {
      this.router.navigate(["/auth/login"]);
      return false;
    }

    let ehValido = this.jwtService.ehValido();

    if (!ehValido) this.router.navigate(["/auth/login"]);

    return ehValido;
  }

}
