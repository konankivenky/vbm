import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from 'src/users/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public id:any;
  public item;

  constructor(private active:ActivatedRoute, private service:ApiService, private router:Router) {
  }
    
    ngOnInit() {
      var that=this;
      this.active.params.subscribe(
        (res) =>{
   that.id=res.id;
      });
      this.service.fetchuser(that.id).subscribe(
        (res)=>{
        this.item=res;
        console.log(res);
        
      })
    
  }

  gotouser(){
  this.router.navigate(['/users'])
  }



}
