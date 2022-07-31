import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // pegando a lista de produtos pelo serviço 
    /* this.produtos = this.produtosService.getAll(); */ // Mudando forma por conta do pesquisar
    const produtos = this.produtosService.getAll();

    // Scripit para pesquisa de produtos e inicialização da pagina produtos
    this.route.queryParamMap.subscribe(params => {
      // pegando o valor da descrição da url 
      const descricao = params.get("descricao")?.toLowerCase(); // toLowerCase - tudo minusculo
      
      
      // VErificando se tem descrição 
      if(descricao) {
        // Filtrando todos os produtos que tem a descrição 
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao))
        // Filter = pecorre array produto por produto trazendo uma nova array filtrada 
        // includes = verifica se esta incluso a descrição no produto
        return;
      }

      // caso não tenha descrição 
      this.produtos = produtos;

    })
  }

}
