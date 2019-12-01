import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public masterdata;


public fakedata=[
  {
    username:"venky",
    password:'12345',
    token:"venky12345"
  }
  
]

fakeusers(username,password){
  var fake=this.fakedata.filter(res => {
if(res.username === username && res.password===password){
  return true
}
})
if(fake.length>=1){
  return fake[0].token
}
}

  constructor(private http:HttpClient) { }

  fetchusers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  fetchuser(id){
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
  }
}
