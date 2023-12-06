import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  
  // formData = {
  //   name: '',
  //   email: '',
  //   message: '',
  // };
 
  // constructor(private router: Router) {}
 
  // onSubmit(form: NgForm): void {
  //   // Your form submission logic goes here
  //   console.log('Form submitted:', this.formData);
  //   // You can perform any necessary actions (e.g., sending data to a server)
 
  //   // Reset the form after submission
  //   form.resetForm();
  // }
 
  // canDeactivate(): any{
  //   // Check if the form data is dirty or unsaved
  //   // Implement your own logic based on the requirements
  //   if (this.isFormDirty()) {
  //     return window.confirm('You have unsaved changes. Do you really want to leave?');
  //   }
  //   return true;
  // }
 
  // private isFormDirty():any{
  //   // Check if the form data is dirty or unsaved
  //   // Implement your own logic based on the requirements
  //   return (
  //     this.formData.name !== '' ||
  //     this.formData.email !== '' ||
  //     this.formData.message !== ''
  //   );
  // }
}
