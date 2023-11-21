import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  public status = 'error';
  public clickCount =0;
  public text: any;
  public title = 'Personal Details';
  public myclass = 'green';
  public value = 'about yourself'
  public myObj = { FirstName: 'Anushree',LastName: 'Das',Training : 'Front End web Development',City : 'Malappuram',State : 'Kerala'};

  asIsOrder(a: any, b: any) {
    return 1;
  }
  onSave(){
    this.clickCount ++;
  }
  keyup(value : string ){
    this.text= value;
  }
}
