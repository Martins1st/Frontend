import { Component, OnInit } from '@angular/core';
import { ClienteAdicionarComponent } from '../cliente-adicionar/cliente-adicionar.component';
import { AlertService } from 'src/app/core/services/alert.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { ClienteService } from 'src/app/core/services-api/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: "../cliente-adicionar/cliente-adicionar.component.html",
  styleUrls: ['./cliente-editar.component.scss']
})
export class ClienteEditarComponent extends ClienteAdicionarComponent implements OnInit {

  

  clienteId: number;
  constructor(protected router: Router, protected activatedRoute: ActivatedRoute, protected readonly alertService: AlertService, protected readonly loadingService: LoadingService, protected readonly clienteService: ClienteService) {
    super(alertService, loadingService, clienteService);
  }

  ngOnInit(): void {
    this.tituloBotao = "Atualizar"
    this.clienteId = Number(this.activatedRoute.snapshot.params.id);
    this.ObterPorId();
  }

  ObterPorId(){
    this.loadingService.ativar();
    this.clienteService.ObterPorId(this.clienteId).subscribe(
      (response: any) =>{
        var cliente = response.data;
        this.form.patchValue({id: cliente.id, nome: cliente.nome, orcamentoInicial:cliente.orcamentoInicial});
        this.loadingService.desativar();
      },
      (error) =>{
        this.loadingService.desativar();
      }
    )
  }

  salvar(){
    this.loadingService.ativar();
    this.clienteService.Atualizar(this.form.value).subscribe(
      (response) =>{
        this.loadingService.desativar();
        this.alertService.AlertaSucessoComTimerPersonalizada("Alteração Realizada com Sucesso", "você será redirecionado em breve para listagem");
        setTimeout(() => {
          this.router.navigateByUrl("/cliente/listar")
        }, 2510);
        
      },
      (error) =>{ this.loadingService.desativar();}
    )
  }

}
