import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoComponent,
    DetalhesProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule
  ]
})
export class ProdutoModule { }
