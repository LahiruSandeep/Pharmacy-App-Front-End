import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  constructor(private http:HttpClient){}

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
   })
  
  };

 

}
