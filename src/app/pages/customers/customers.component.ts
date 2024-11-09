import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

  constructor(private http:HttpClient){
    this.loadTable();
  }

  public customerList:any = [];

  loadTable(){
    this.http.get("http://localhost:8080/customer/get-all-customers").subscribe(data => {
      this.customerList = data;
    })
  }

}
