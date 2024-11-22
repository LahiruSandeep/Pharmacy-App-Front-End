import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ManageCustomersComponent } from '../manage-customers/manage-customers.component';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  constructor(private http:HttpClient){
    this.loadTable();
  }

  public customer:any = {
    name: "",
    address: "",
    gender: "",
    age: "",
    contactNumber: "",
    note: ""

  };

  public customerList:any = [];
 
  addCustomer() {
   this.http.post("http://localhost:8080/customer/add-customer",this.customer).subscribe(data => {
    alert("Customer Added!")
    this.customerList = data;
    this.loadTable();
   })
  };

  loadTable(){
    this.http.get("http://localhost:8080/customer/get-all-customers").subscribe(data => {
      this.customerList = data;
    })
  }
}
