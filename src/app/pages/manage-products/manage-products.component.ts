import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent {

  constructor(private http:HttpClient){
    this.loadTable();
  }

  public product:any = {
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    supplierId: "",
    rating: ""

  };

  public productList:any = [];
 
  addProduct() {
   this.http.post("http://localhost:8080/product/add-product",this.product).subscribe(data => {
    alert("Product Added!")
    this.productList = data;
   })
  
  };

  loadTable(){
    this.http.get("http://localhost:8080/product/get-all-products").subscribe(datas => {
      this.productList = datas;
    })
  }

  deleteProduct(id:any){
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
        this.http.delete(`http://localhost:8080/product/delete-by-id/${id}`).subscribe(data=>{
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

}
