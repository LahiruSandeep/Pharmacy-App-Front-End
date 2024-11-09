import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-customers',
  standalone: true,
  imports: [RouterLink, HttpClientModule, FormsModule],
  templateUrl: './manage-customers.component.html',
  styleUrl: './manage-customers.component.css'
})
export class ManageCustomersComponent {

  constructor(private http:HttpClient){}

  public product:any = {
    name: "",
    description: "",
    price: "",
    category: "",
    supplierId: "",
    rating: ""

  };
 
  // addProduct() {
  // //  this.http.post("http://localhost:8080/product/add-product")
  //  console.log(this.product);
  //  this.http.post("http://localhost:8080/product/add-product",this.product).subscribe(data => {
  //   alert("Product Added!")
  //  })

}
