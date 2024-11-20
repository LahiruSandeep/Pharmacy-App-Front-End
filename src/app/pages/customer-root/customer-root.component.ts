import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ManageCustomersComponent } from "../manage-customers/manage-customers.component";

@Component({
  selector: 'app-customer-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ManageCustomersComponent],
  templateUrl: './customer-root.component.html',
  styleUrl: './customer-root.component.css'
})
export class CustomerRootComponent {

}
