import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ManageProductsComponent } from './pages/manage-products/manage-products.component';
import { ManageCustomersComponent } from './pages/manage-customers/manage-customers.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { OrdersComponent } from './pages/orders/orders.component';

export const routes: Routes = [
    {
        path : "",
        component : DashboardComponent
    },
    {
        path : "product",
        component : ProductComponent
    },
    {
        path : "sign-in",
        component : SignInComponent
    },
    {
        path : "checkout",
        component : CheckoutComponent
    },
    {
        path : "manage-products",
        component : ManageProductsComponent
    },
    {
        path : "customers",
        component : CustomersComponent
    },
    {
        path : "manage-customers",
        component : ManageCustomersComponent
    },
    {
        path : "orders",
        component : OrdersComponent
    }
]
