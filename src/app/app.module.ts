import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CommonModule } from '@angular/common';
import { UserEditComponent } from './user-edit/user-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';

import { ViewComponent } from './view/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from 'src/guard/auth.guard';


const ROUTES=[
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'login',
    component:LoginComponent
  },
  
  {
    path:'user_edit/:id',
    component:UserEditComponent,
    
  },
  {
    path:'view/:id',
    component:ViewComponent
  },
  {
    path:'users',
    loadChildren:'../users/users.module#UsersModule',
    canActivate:[AuthGuard]
  
  },
  {
    path:'posts',
    loadChildren:'../posts/posts.module#PostsModule',
    canActivate:[AuthGuard]
  },
  
  {
    path:'comments',
    loadChildren:'../comments/comments.module#CommentsModule',
    canActivate:[AuthGuard]
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    UserEditComponent,
    LoginComponent,
    ViewComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES,
      {
          
      }),
    
   
    BrowserAnimationsModule,
   
   
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
