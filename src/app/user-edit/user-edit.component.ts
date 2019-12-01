import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from 'src/users/api.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  public id:any;
  public user:any;
  public usereditdata={
    
  }

  constructor(private active:ActivatedRoute, private service:ApiService,
     private router:Router) { }

  ngOnInit() {
    var that=this;
    this.active.params.subscribe(
      (res) =>{
 that.id=res.id;
    });
    this.service.fetchuser(that.id).subscribe(
      (res)=>{
      this.user=res;
      
    })
  }

  saveuserdata(){
    console.log(this.usereditdata)
  }
  canceluserdata(){
    this.router.navigate(['/users'])
  }

}
