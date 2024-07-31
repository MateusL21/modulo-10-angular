import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../interfaces/Category';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  @Input()
  categories : Category [] = [];

  ngOnInit(): void {
      
  }

}
