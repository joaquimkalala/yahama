import {ProdutoService} from './../../../core/service/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  public prods = [];

  constructor(private prodService:ProdutoService){}

 

  ngOnInit(): void {

    this.prodService.index().subscribe((arg: { data: never[]; }) =>{
      console.log(arg);
      this.prods = arg.data;
    });
  }

}
