import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../produtos';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit {
  produtos: IProduto[] = produtos;


  constructor() { }

  ngOnInit(): void {
  }

}
