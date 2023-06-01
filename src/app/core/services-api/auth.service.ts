import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';

@Injectable()

export class AuthService{
    private endpoint = `${environment.api}/Auth`;
    constructor(private readonly http: HttpClient){

    }

    Login(login){
        return this.http.post(`${this.endpoint}/login`, login);
    }

    Registrar(registrar){
        return this.http.post(`${this.endpoint}/registrar`, registrar);
    }
}