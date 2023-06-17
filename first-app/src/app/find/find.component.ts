import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {

  firstname: string = "";
  findUser: FormGroup = this.fb.group({
    firstname: new FormControl(this.firstname, [
      Validators.required
    ])
  })

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
    ){}
  
  process(){
    this.firstname = this.findUser.get('firstname')?.value;
    console.log(this.firstname)
    if (this.validate() == false)return;
    this.auth.send_get_request(this.findUser.value).subscribe();
    this.findUser.reset();
  }


  validate(){
    let f = true
    if (this.firstname === '' ) {
      f = false;
    }
    if (!f){
      alert("Please Enter All Fields");
      return false;
    }
    return true;
  }
}
