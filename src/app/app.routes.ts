import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

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
    }
];
