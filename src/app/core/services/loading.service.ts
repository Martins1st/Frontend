import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({providedIn:"root"})
export class LoadingService {
    constructor(private ngxSpinner: NgxSpinnerService) {

    }
    ativar() {
        this.ngxSpinner.show();
    }
    desativar() {
        this.ngxSpinner.hide();
    }
}