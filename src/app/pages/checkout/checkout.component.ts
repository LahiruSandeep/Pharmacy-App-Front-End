import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  constructor(private http:HttpClient){}

  public orders:any = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    contactNumber: "",
    address: ""

  };

  public orderList:any = [];
 
  addOrder() {
   this.http.post("http://localhost:8080/orders/add-order",this.orders).subscribe(data => {
    alert("Order Added!")
    this.orderList = data;
   })
  
  };
 

}
