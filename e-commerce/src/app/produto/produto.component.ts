import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit {
  produtos: IProduto[] | undefined;


  constructor(
    // Importando a lista de produtos 
    private produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
    // pegando a lista de produtos pelo serviço 
    this.produtos = this.produtosService.getAll();
  }

}
