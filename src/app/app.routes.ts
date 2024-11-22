import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ManageProductsComponent } from './pages/manage-products/manage-products.component';
import { ManageCustomersComponent } from './pages/manage-customers/manage-customers.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { CustomerRootComponent } from './pages/customer-root/customer-root.component';
import { DashPageComponent } from './pages/dash-page/dash-page.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ManageOrdersComponent } from './pages/manage-orders/manage-orders.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';

export const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: "product",
    component: ProductComponent
  },
  {
    path: "doctors",
    component: DoctorsComponent
  },
  {
    path: "orders",
    component: OrdersComponent
  },
  {
    path: "place-order",
    component: ManageOrdersComponent
  },
  {
    path: "manage-products",
    component: ManageProductsComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent
  },
  {
    path: "customers",
    component: ManageCustomersComponent,
    children: [
      {
        path: "",
        component: CustomerRootComponent
      },
      {
        path: "add-customer",
        component: AddCustomerComponent
      }
    ]
  },
  {
    path: "dashboard",
    component: DashPageComponent,
    children: [
      {
        path:"",
        component:DashboardComponent
      },
      // {
      //   path: "customers",
      //   component: CustomerRootComponent,
      //   children:[
      //     {
      //       path:"",
      //       component:ManageCustomersComponent
      //     },
      //     {
      //       path:"add-customer",
      //       component:AddCustomerComponent
      //     },
      //     {
      //       path:"view-all",
      //       component:ManageCustomersComponent
      //     }
      //   ]
      // }




      // {
      //   path: "patient",
      //   component: PatientRootComponent,
      //   children:[
      //     {
      //       path:"",
      //       component:PatientManageComponent
      //     },
      //     {
      //       path: "add-patient",
      //       component: AddPatientComponent
      //     },
      //     {
      //       path:"manage-all",
      //       component: PatientManageComponent
      //     }
      //   ]
      // },

    ]
  }
];
