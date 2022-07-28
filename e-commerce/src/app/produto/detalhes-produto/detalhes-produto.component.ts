import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    // Serviço de produtos
    private produtosService: ProdutosService,
    // Vai utilizar o serviço de rotas 
    private route: ActivatedRoute,
    // Serviço de notificação
    private notificacaoService: NotificacaoService,
    
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    // pegando os paramentros da rota
    const routeParams = this.route.snapshot.paramMap;
    // pegando o Id do produto pelo  paramentro da url 
    const produtoId = Number(routeParams.get("id"))
    
    // recebendo os dados do produto pela id 
    this.produto = this.produtosService.getOne(produtoId)
  }

  adicionarAoCarrino() {
    const produto: IProdutoCarrinho = {
      ...this.produto!, // ! = caso for undifind diz não esse cara existe
      quantidade: this.quantidade
    }

    this.notificacaoService.notificar("Produto adicionado no carrinho")
    this.carrinhoService.adicionarAoCarrinho(produto)
  }

}
