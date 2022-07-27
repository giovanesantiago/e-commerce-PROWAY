import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  // metodo de notificação 
    notificar(message: string) {
      // (Messagem, botão do lado, {configurações} )
      this.snackBar.open(message, "ok", {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      })
    }
}
