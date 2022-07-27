import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  // Var ter acesso direto aos produtos do Back end
  produto : IProduto[] = produtos;
  
  constructor() { }


  // Metodo para retornar a lista de produtos 
  getAll() {
    return this.produto;
    
  }

  // Metodo para receber a id do produto 
  getOne(produtoId: number){
    return this.produto.find(produto => produto.id === produtoId)
  }
}
