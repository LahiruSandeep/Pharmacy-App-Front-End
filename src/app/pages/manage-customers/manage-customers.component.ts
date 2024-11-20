import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-customers',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './manage-customers.component.html',
  styleUrl: './manage-customers.component.css'
})
export class ManageCustomersComponent {

  constructor(private http:HttpClient){
    this.loadTable();
  }

  public customerList:any = [];

  loadTable(){
    this.http.get("http://localhost:8080/customer/get-all-customers").subscribe(data => {
      this.customerList = data;
    })
  }

  deleteCustomer(id:any){
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
        this.http.delete(`http://localhost:8080/customer/delete-by-id/${id}`).subscribe(data=>{
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

  public selectedCustomer:any ={};

  selectCustomer(customer:any){
      console.log(customer);
      this.selectedCustomer=customer;

  }


  updateCustomer(){
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.http.put("http://localhost:8080/customer/update",this.selectedCustomer).subscribe(res=>{
          Swal.fire("Saved!", "", "success");
        })
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

  
  }

 
 

}
