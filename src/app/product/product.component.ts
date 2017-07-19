import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { IProduct } from "app/service/product";
import { ProductService } from 'app/service/product.service';
@Component({
  // selector: 'product-root',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = 'Product Details';
  errorMessage: string;
  iproducts: IProduct[];
  prdts:IProduct[];
  ProductsForm: FormGroup;

  products = {};
  
  constructor(private productService: ProductService) { }

  getProducts(){
    this.productService.getProducts()
                        .subscribe(
                          productsList => this.iproducts = productsList,
                          errorMsg => this.errorMessage = <any>errorMsg
                        );
  }

  addProducts(productdetails) {
    this.products = productdetails;
    console.log(this.products);
    this.productService.sendProducts(this.products)
      .subscribe(
            data => {
              console.log(data);
              this.ProductsForm.reset();
              this.getProducts();
            },
            error =>{console.error(error)}
      );
  }

  ngOnInit() {
    this.getProducts();
  }

}
