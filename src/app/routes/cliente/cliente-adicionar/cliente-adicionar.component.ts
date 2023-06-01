import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/core/services-api/cliente.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-cliente-adicionar',
  templateUrl: './cliente-adicionar.component.html',
  styleUrls: ['./cliente-adicionar.component.scss']
})
export class ClienteAdicionarComponent implements OnInit {

  tituloBotao = "Salvar";
  form = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(null),
    orcamentoInicial: new FormControl(null)
  })

  constructor(protected readonly alertService: AlertService, protected readonly loadingService: LoadingService, protected readonly clienteService: ClienteService) { }

  ngOnInit(): void {
  }


  salvar(){
    this.loadingService.ativar();
    this.clienteService.Adicionar(this.form.value).subscribe(
      (response) =>{
        this.alertService.AlertaSucessoComTimerPersonalizada("Cliente Registrado com Sucesso", "O Formulário será resetado");
        this.form.reset();
        this.loadingService.desativar();
      },
      (error) =>{
        this.loadingService.desativar();
      }
    )
  }
}
