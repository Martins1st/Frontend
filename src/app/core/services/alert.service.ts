import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({ providedIn: "root" })
export class AlertService {


    AlertaSucessoComTimer() {
        return Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Ação realizada com sucesso!',
            text: 'Você será redirecionado em breve',
            showConfirmButton: false,
            timer: 1500
        })
    }

    AlertaSucessoComTimerPersonalizada(titulo: string, texto: string) {
        return Swal.fire({
            position: 'center',
            icon: 'success',
            title: titulo,
            text: texto,
            showConfirmButton: false,
            timer: 2500
        })
    }

    AlertaSucessoSemTimerPersonalizada(titulo: string, texto: string) {
        return Swal.fire({
            position: 'center',
            icon: 'success',
            title: titulo,
            text: texto,
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEscapeKey: false
        })
    }
    AlertaErroRegrasDeNegocio(descricaoDoErro: string) {
        return Swal.fire({
            position: "center",
            icon: "error",
            title: "Opss...",
            html: descricaoDoErro,
            showConfirmButton: true,
        })
    }

    AlertaErroInesperadoStatus500() {
        return Swal.fire({
            position: "center",
            icon: "error",
            title: "Opss...",
            text: "Algo deu errado, Por favor, contate o TI!",
            showConfirmButton: true,
        })
    }

    async AlertaConfirmarAcao(title) {
        let result = await Swal.fire({
            title:  title,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Sim',
            denyButtonText: `Não`,
        });

        if (result.isConfirmed) return true;

        return false;
    }
}
