import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductCardComponent, NgFor,HttpClientModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  ngOnInit(): void {
    this.loadProductInformation();
  }


  public productInfo: any = [];

  async loadProductInformation() {

    // Sync - wait
    // let reponse = await fetch('https://fakestoreapi.com/products')
    // let body = await reponse.json()
    // this.productInfo = body;
    // console.log(body);
    

    //Async - no wait
    fetch("http://localhost:8080/product/get-all-products")
      .then(res => res.json())
      .then(data => {
        this.productInfo = data;
        console.log(data);

      });


    // this.http.get("https://fakestoreapi.com/products")
    //   .subscribe(data => {
    //     this.productInfo = data;
    //     console.log("B");

    //   });


  }

}
