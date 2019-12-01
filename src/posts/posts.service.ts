import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
 export class PostsService{



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
     constructor(private http:HttpClient){

     }
     fetchpostdata(){
         return this.http.get("http://jsonplaceholder.typicode.com/posts")
     }
 }