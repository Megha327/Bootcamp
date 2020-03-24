import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  productItem:any=[
    {id:1, name:"product1"},
    {id:2, name:"product2"},
    {id:3, name:"product3"},
    {id:4, name:"product4"},
    {id:5, name:"product5"}
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(products){
    this.router.navigate(['/product',products.id]);
  }

}
