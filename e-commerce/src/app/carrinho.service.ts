import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  // Armazenamento dos itens
  itens: IProdutoCarrinho[] = [];


  constructor() { }


  // metodos 
  // Lista de itens
  obtemCarrinho() {
    // Pegar as infos do carrino dentro do local store
    return JSON.parse(localStorage.getItem("carrinho") || ""); 
    // Parse = converte de String para objeto
  }

  // Adcionar os itens do carrino
  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    //  add o novo produto a lista de carrinhos 
    this.itens.push(produto);
    // Add todos os itens apos inserir o novo itens no local store
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
    // stringify  = converte de objeto para string
  }

  // Limpar o carrinho 
  limparCarrinho() {
    this.itens  = [];
    localStorage.clear();
  }
}
