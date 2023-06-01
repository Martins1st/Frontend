import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/core/services-api/cliente.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.scss']
})
export class ClienteListarComponent implements OnInit {

  clientes = [];
  constructor(protected readonly alertService: AlertService, protected readonly loadingService: LoadingService, protected readonly clienteService: ClienteService) { }

  ngOnInit(): void {
    this.obter();
  }


  obter(){
    this.loadingService.ativar();
    this.clienteService.Obter().subscribe(
      (response:any) =>{
        let clientes = response.data;
        this.clientes = [...clientes];
        this.loadingService.desativar();
      },
      (error) =>{
        this.loadingService.desativar();
      }
    )
  }

  async deletar(id: number){
    var acaoConfirmada = await this.alertService.AlertaConfirmarAcao("Deseja deletar o cliente de Id " + id );
    if(acaoConfirmada){
      this.clienteService.Deletar(id).subscribe(
        (response) =>{
          let posicaoParaRemover = this.clientes.findIndex(x => x.id == id);
          this.clientes.splice(posicaoParaRemover, 1);
          this.loadingService.desativar();
          this.alertService.AlertaSucessoComTimerPersonalizada("Cliente Deletado com Sucesso", "A lista atualizará em breve!");
          
        },
        (error) =>{
          this.loadingService.desativar();
        }
      )
    }
  }

}
