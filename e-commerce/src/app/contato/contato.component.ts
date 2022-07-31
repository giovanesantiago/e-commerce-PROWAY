import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  // Cria um grupo dos dados do formulario 
  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4), // Minimo 4 caracteres 
      Validators.required // Torna o campo nome obrigatorio 
    ]],
    assunto: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required,

    ]],
    email: ["", [
      Validators.email, //Validor de email 
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  })


  constructor(
    // Agrupa todos os campos do formulario e cria regras 
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  enviarFormulario() {
    alert('Messagem foi enviada')
    this.formContato.reset() // Apaga todos os dados 
  }
}
