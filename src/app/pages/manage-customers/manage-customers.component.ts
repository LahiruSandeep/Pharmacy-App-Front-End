import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-customers',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './manage-customers.component.html',
  styleUrl: './manage-customers.component.css'
})
export class ManageCustomersComponent {

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
