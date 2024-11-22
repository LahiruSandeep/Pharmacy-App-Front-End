import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-orders',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-orders.component.html',
  styleUrl: './manage-orders.component.css'
})
export class ManageOrdersComponent {
  constructor(private http:HttpClient){
    this.loadTable();
  }

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

  loadTable(){
    this.http.get("http://localhost:8080/orders/get-all-orders").subscribe(datas => {
      this.orderList = datas;
    })
  }

}
