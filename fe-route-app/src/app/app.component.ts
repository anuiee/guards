import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule,LoginComponent,FormComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe-route-app';
  constructor(private authService: AuthService,private router:Router) {}
 
  isAuthenticated(): boolean {
    return this.authService.isAuthenticatedUser();
  }
 
  logout(): void {
    this.authService.logout();
    this.router.navigate([''])
  }
  form(): void {
    //this.authService.logout();
    this.router.navigate(['/form'])
  }
}
