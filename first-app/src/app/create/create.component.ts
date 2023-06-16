import { Component } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
// import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent{
  
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  phonenumber: string = "";
  userForm: FormGroup = this.fb.group({
    firstname: new FormControl(this.firstname, [
      Validators.required]),
    lastname: new FormControl(this.lastname,[
      Validators.required]),
    email: new FormControl(this.email, [
      Validators.required]),
    phonenumber: new FormControl(this.phonenumber, [
      Validators.required])
  })

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
    ) { }

  process() {
    this.firstname = this.userForm.get('firstname')?.value;
    this.lastname = this.userForm.get('lastname')?.value;
    this.email = this.userForm.get('email')?.value;
    this.phonenumber = this.userForm.get('phonenumber')?.value;
    if (this.validate() == false) return;
    console.log(this.firstname);
    console.log(this.lastname);
    console.log(this.userForm.value);
    console.log(JSON.stringify(this.userForm.value))

    this.auth.send_post_request(this.userForm.value).subscribe()
  }

  validate() {
    console.log("in validate field");
    let f = true;
    if (this.firstname === '' || this.lastname === '' ) {
      console.log("empty 1");
      f = false;
    }else if (this.phonenumber === '' || this.email === ''){
      console.log("empty 2");
      f = false;
    }
    if (!f){
      alert("Please Enter All Fields");
      return false;
    }
    return true;
  }
}
