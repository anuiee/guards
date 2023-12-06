import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { adimnAuthGuard } from './adimn-auth.guard';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';


export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'Home',
        component:HomeComponent
    },
    {
        path:'About',
        component:AboutComponent
    },
    {
        path:'Product',
        component:ProductComponent
    },
    {
        path:'Contact',
        component:ContactComponent
    },
    {
        path:'Signup',
        component:SignupComponent
    },
    {
        path:'Profile',
        component:ProfileComponent
    },
    {
        path:'admin',
        canActivate :[adimnAuthGuard],
        component:AdminPageComponent
    },
    {
        path:'user',
        component:UserPageComponent
    },
    {
        path:'form',
        // canDeactivate :[formGuard],
        component:FormComponent
    }
];
