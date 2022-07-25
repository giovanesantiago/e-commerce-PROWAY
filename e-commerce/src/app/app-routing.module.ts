import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule) },
  { path: "", redirectTo: "produtos", pathMatch: "full"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
