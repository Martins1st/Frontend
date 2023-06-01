import { HttpErrorResponse } from "@angular/common/http";

export class ErrorsApi {
    public static Get(response: HttpErrorResponse) {
        let error = '';
        for (let err of response.error.erros) {
            error += `<p>${err}</p>`;
        }
        return error;
    }
}