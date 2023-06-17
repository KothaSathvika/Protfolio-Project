import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  firstname: string = " "
  email: string = " "
  updateForm: FormGroup = this.fb.group({
    firstname: new FormControl(this.firstname, [
      Validators.required]),
    email: new FormControl(this.email, [
      Validators.required
      ])
  })
  constructor(private fb: FormBuilder, private auth: AuthService){}

  process(){
    this.firstname = this.updateForm.get('firstname')?.value;
    this.email = this.updateForm.get('email')?.value;
    if (this.validate() == false) return;
    console.log(this.firstname);
    console.log(JSON.stringify(this.updateForm.value));

    this.auth.send_update_request(this.updateForm.value).subscribe();
    this.updateForm.reset();
  }

  validate(){
    let f = true;
    if (this.firstname === '' || this.email === '' ) {
      console.log("empty 1");
      f = false;
    }
    if (!f){
      alert("Please Enter All Fields");
      return false;
    }
    return true;
  }
}
