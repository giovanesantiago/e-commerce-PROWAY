import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  // Propriedades com itens do carrinho 
  itensCarrinho: IProdutoCarrinho[] = [];
  // Propriedade para Total de preço
  total = 0 ;

  constructor(
    // Injetando Serviço de carrinho
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Ao inicializar obter os itens do serviço ussando o metodo 
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    // Calcular total do preço 
    this.calculaTotal()
  }

  // Metedo para calcular total do preço
  calculaTotal() {
    // Usando reduce para pecorre os itens 
    // prev = o elemento anterior (o resultado da soma de cada loop )
    // curr = elemento atual (um item do carrinho)
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0)
  }

  // Criando metodo igual do serciço para atualizar tambem na interface
  removerProdutoCarrinho(produtoId: number) {
    // Removendo item localmente
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    // Removendo item do local store
    this.carrinhoService.removerProdutoCarrinho(produtoId)
    // Recalculando total depois da remoção
    this.calculaTotal();
  }

  comprar() {
    alert("Parabens, Voce finalizou a sua compra")
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['produtos'])
  }
}
