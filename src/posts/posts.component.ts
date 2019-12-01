import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postresponse;
  constructor(private postservice:PostsService,private router:Router) {
    this.postdata();
   }

  ngOnInit() {
  }
  postdata(){
    var that=this;
    this.postservice.fetchpostdata().subscribe(res =>{
      that.postresponse=res;
    
    })
  }

  

}
