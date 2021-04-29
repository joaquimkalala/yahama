import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProdutoCreateComponent} from './components/produto/produto-create/produto-create.component';
import {ProdutoListComponent} from './components/produto/produto-list/produto-list.component';
import {ProdutoShowComponent} from './components/produto/produto-show/produto-show.component';


const routes: Routes = [

{ path: '', redirectTo: 'produtos/list', pathMatch:'full'},
{path: 'produtos/list', component:ProdutoListComponent},
{path: 'produtos/create', component:ProdutoCreateComponent},
{path:'produtos/show/:params', component:ProdutoShowComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
