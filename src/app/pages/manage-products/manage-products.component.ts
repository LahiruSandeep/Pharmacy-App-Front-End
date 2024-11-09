import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [FormsModule, NgIf, HttpClientModule, NgFor],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent {

  constructor(private http:HttpClient){
    this.loadTable();
  }

  public product:any = {
    name: "",
    description: "",
    price: "",
    category: "",
    supplierId: "",
    rating: ""

  };

  public productList:any = [];
 
  addProduct() {
   this.http.post("http://localhost:8080/product/add-product",this.product).subscribe(data => {
    alert("Product Added!")
    this.productList = data;
   })
  
  };

  loadTable(){
    this.http.get("http://localhost:8080/product/get-all-products").subscribe(datas => {
      this.productList = datas;
    })
  }

}
