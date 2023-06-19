import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  server_address = "http://localhost:5000/addUser";
  update_address = "http://localhost:5000/updateUser";
  find_address = "http://localhost:5000/findUser";
  delete_address = "http://localhost:5000/deleteUser";
  header = new HttpHeaders().set('Content-Type', 'application/json');

  send_post_request(data){
    return this.http.post(
      this.server_address,
      JSON.stringify(data),
      { headers: this.header }
    );
  }

  send_update_request(data){
    return this.http.put(
      this.update_address,
      JSON.stringify(data),
      {headers: this.header}
    );
  }

  // send_delete_request(data){
  //   return this.http.delete(
  //     this.delete_address,
  //     JSON.stringify(data),
  //     {headers: this.header}
  //   );
  // }

  // send_get_request(data){
  //   return this.http.get(
  //     this.find_address,
  //     JSON.stringify(data),
  //     {headers: this.header},
  //   );
  // }

  send_delete_request(data) {
    // let info = JSON.stringify(data)
    const options = {
      headers: this.header,
      params: data
    };
  
    return this.http.delete(this.delete_address, options);
  }

  send_get_request(data) {
    // let info = JSON.stringify(data)
    const options = {
      headers: this.header,
      params: data
    };
  
    return this.http.get(this.find_address, options);
  }
  
}
