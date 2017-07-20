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
  prdts: IProduct[];
  flag:any= true;


  products = {};

  constructor(private productService: ProductService) { }

  ProductsForm: FormGroup;

  getProducts() {
    this.productService.getProducts()
      .subscribe(
      productsList => this.iproducts = productsList,
      errorMsg => this.errorMessage = <any>errorMsg
      );
  }

  addProducts(productdetails) {
    productdetails.id = 0;
    this.products = productdetails;
    // console.log(this.products);
    // console.log(Object.keys(this.products).length);

    if (Object.keys(this.products).length > 0) {
      this.productService.sendProducts(this.products)
        .subscribe(
        data => {
          console.log(data);
          this.products = {};
          // this.ProductsForm.reset();
          this.getProducts();
        },
        error => { console.error(error) }
        );
    }
    else {
      console.log("there is no form data");
    }
  }

  ngOnInit() {
    this.getProducts();
  }

}
