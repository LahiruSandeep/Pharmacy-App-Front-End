import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgFor, FormsModule, RouterLink],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

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
     alert("Product Added!")
     this.orderList = data;
     this.loadTable();
    })
  };
   

  loadTable(){
    this.http.get("http://localhost:8080/orders/get-all-orders").subscribe(data => {
      this.orderList = data;
    })
  }

  deleteOrder(id:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/orders/delete-by-id/${id}`).subscribe(data=>{
        this.loadTable();
        })
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });

  }

  public selectedOrder:any={};

  selectOrder(orders:any){
    console.log(orders);

    this.selectedOrder=orders;
    
  }

  updateOrder(){
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.http.put("http://localhost:8080/orders/update",this.selectedOrder).subscribe(res=>{
          Swal.fire("Saved!", "", "success");
          this.loadTable();
        })
        
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

  }

  openModal(){
    
  }

}
