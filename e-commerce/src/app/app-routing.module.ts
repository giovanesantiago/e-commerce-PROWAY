import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncotradoComponent } from './nao-encotrado/nao-encotrado.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule) },
  { path: "", redirectTo: "produtos", pathMatch: "full"},
  { path: "**", component: NaoEncotradoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
