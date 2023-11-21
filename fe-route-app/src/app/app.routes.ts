import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {
        path:'',
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
    }
];
