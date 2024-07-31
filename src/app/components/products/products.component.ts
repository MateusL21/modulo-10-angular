import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Category } from '../../interfaces/Category';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  categories : Category [] = [

    {id:1,name:"Produção Própria"},
    {id:2,name:"Nacioanal"},
    {id:3,name:"Importado"},
    {id:4,name:"Premiums"},

  ]
  

  constructor() { }

  ngOnInit(): void {
      
  }

}
