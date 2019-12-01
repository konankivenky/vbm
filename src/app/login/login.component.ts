import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/users/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:ApiService) { }

  ngOnInit() {
  }

  validuser(username,password,event){
        var token=this.service.fakeusers(username,password);
        if(typeof token !=="undefined"){
          localStorage.setItem("token",token)
          this.router.navigate(['users'])
        }
        else{
          localStorage.removeItem('token');
        }
  }

  


}
