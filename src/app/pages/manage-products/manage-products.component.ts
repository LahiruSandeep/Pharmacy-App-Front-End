import { NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [FormsModule, NgIf, HttpClientModule],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent {

  constructor(private http:HttpClient){}

  public product:any = {
    name: "",
    description: "",
    price: "",
    category: "",
    supplierId: "",
    rating: ""

  };
 
  addProduct() {
  //  this.http.post("http://localhost:8080/product/add-product")
   console.log(this.product);
   this.http.post("http://localhost:8080/product/add-product",this.product).subscribe(data => {
    alert("Product Added!")
   })
  
  };

}
