import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { UserPageComponent } from '../user-page/user-page.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,AdminPageComponent,UserPageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(public authService: AuthService, private router: Router) { }
  username = '';
  password = '';
  login():void{
    
    if (this.authService.login(this.username, this.password)) {
      if (this.authService.getUserRole() === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
    
  }

    

