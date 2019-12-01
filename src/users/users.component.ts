import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from './api.service';
  

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
public data;
  public response;
  modalRef: BsModalRef;
  
  constructor(private service:ApiService , private router:Router, private modalService: BsModalService) { 
    this.getuserData();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  

  ngOnInit() {
  }

  getuserData(){
    var that=this;
    this.service.fetchusers().subscribe(function(res){
      that.response=res;
      that.service.masterdata=res;
    
    })
  }
  namedisplay(event){
    var that=this;
    that.data=event;
    console.log(that.data);
    if(that.data){
      that.response=that.service.masterdata.filter(function(res){
        return res.id == that.data.id
      })
    }
    else{
      that.response=that.service.masterdata;
    }
  }
  useredit(item){
    this.router.navigate(['user_edit',item]);
  }







}
