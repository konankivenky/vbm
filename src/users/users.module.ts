import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';




const ROUTES=[
    {
        path:'',
        pathMatch:'full',
        component:UsersComponent
    },

]

@NgModule({
    imports:[
            CommonModule,
            RouterModule.forChild(ROUTES),
            NgSelectModule,
            TooltipModule.forRoot(),
            ModalModule.forRoot(),
            PopoverModule.forRoot(),
        
    ],
    declarations:[
        UsersComponent
    ]
})
export class UsersModule{

}