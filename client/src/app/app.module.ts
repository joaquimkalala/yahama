import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';
import { ProdutoShowComponent } from './components/produto/produto-show/produto-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutoListComponent,
    ProdutoCreateComponent,
    ProdutoDeleteComponent,
    ProdutoShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
