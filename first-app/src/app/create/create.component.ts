import { Component } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }
}
