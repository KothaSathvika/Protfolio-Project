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
  header = new HttpHeaders().set('Content-Type', 'application/json');

  send_post_request(data){
    return this.http.post(
      this.server_address,
      JSON.stringify(data),
      { headers: this.header }
    );
  }
}
