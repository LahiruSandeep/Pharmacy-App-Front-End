import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgFor],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

  constructor(private http:HttpClient){
    this.loadTable();
  }

  public orderList:any = [];

  loadTable(){
    this.http.get("http://localhost:8080/orders/get-all-orders").subscribe(data => {
      this.orderList = data;
    })
  }

}
