import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import jwtDecode from "jwt-decode";
import { MomentService } from "./moment.service";
import { Token } from "../models/token";

@Injectable({ providedIn: "root" })
export class JwtService {
    constructor(private readonly cookieService: CookieService, private readonly momentService: MomentService) { }

    obterToken() {
        return this.cookieService.get("token");
    }

    salvarToken(token: string) {
        let tokenDescriptografado = jwtDecode(token) as Token;
        const tempoDeExpiracao = new Date(tokenDescriptografado.exp * 1000);
        this.cookieService.set("token", token, tempoDeExpiracao, "/");
    }

    private descriptografarToken() {
        try {
            let token = this.obterToken();
            let tokenDescriptografado = jwtDecode(token) as Token;
            return tokenDescriptografado;
        }
        catch (e) {
            this.removerToken();
        }

    }

    removerToken() {
        this.cookieService.delete("token", "/");
    }

    ehValido(): boolean {
        try {
            let tokenDescriptografado = this.descriptografarToken();
            let result = this.momentService.obterDiferencaEntreDatasEmMilisegundos(
                tokenDescriptografado.exp * 1000,
                this.momentService.obterDataHoraAtual()
            );
            if (0 >= result) {
                this.removerToken();
                return false;
            }

            return true;
        }
        catch (e) {
            this.removerToken();
            return false;
        }


    }
}
