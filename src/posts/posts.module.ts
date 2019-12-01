import { NgModule } from "@angular/core";
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';







const ROUTES=[
    {
        path:'',
        pathMatch:'full',
        component:PostsComponent
    }
]
@NgModule({
    
    
        imports:[
            RouterModule.forChild(ROUTES),
            CommonModule,
            AccordionModule.forRoot(),   
        
        ],
        declarations:[
        PostsComponent,
        
        ]
})
export class PostsModule{

}