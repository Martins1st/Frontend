import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';

@Injectable()

export class ClienteService{
    private endpoint = `${environment.api}/Cliente`;
    constructor(private readonly http: HttpClient){

    }

    Obter(){
        return this.http.get(this.endpoint)
    }

    Adicionar(cliente){
        return this.http.post(this.endpoint, cliente);
    }

    Atualizar(cliente){
        return this.http.put(this.endpoint, cliente);
    }

    ObterPorId(id){
        return this.http.get(`${this.endpoint}/${id}` )
    }

    Deletar(id){
        return this.http.delete(`${this.endpoint}/${id}` )
    }
    
}