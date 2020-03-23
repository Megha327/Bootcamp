import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  productItem:any=[
    {id:1, name:"pruoduct1"},
    {id:2, name:"pruoduct2"},
    {id:3, name:"pruoduct3"},
    {id:4, name:"pruoduct4"},
    {id:5, name:"pruoduct5"}
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(products){
    this.router.navigate(['/product',products.id]);
  }

}
