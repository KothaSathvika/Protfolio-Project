import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  firstname: string = " ";
  email: string = " ";

  deleteForm: FormGroup = this.fb.group({
    firstname: new FormControl(this.firstname, [
      Validators.required
    ]),
    email: new FormControl(this.email, [
      Validators.required
    ])
  })

  constructor(
  private fb: FormBuilder,
  private auth: AuthService
){}

process(){
  this.firstname = this.deleteForm.get('firstname')?.value;
  this.firstname = this.deleteForm.get('email')?.value;
  console.log(this.firstname);
  console.log((this.deleteForm.value));
  if (this.validate() == false)return;
  this.auth.send_delete_request(this.deleteForm.value).subscribe();
  this.deleteForm.reset();
}


validate(){
  let f = true
  if (this.firstname === '' || this.email === '' ) {
    f = false;
  }
  if (!f){
    alert("Please Enter All Fields");
    return false;
  }
  return true;
}
}
