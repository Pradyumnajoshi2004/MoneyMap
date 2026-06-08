import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
      constructor (public route : Router , public authService : AuthService) {}

      loginObj ={
        email:"",
        password:""
      }

      handleSubmit(){
        if(!this.loginObj.email || !this.loginObj.password){
          alert("The Email Or Password Is Required")
          return
        }

        this.authService.login(this.loginObj).subscribe((res:any)=>{
                if(res.errors){
                  this.authService.isLoggedIn.next(false)
                  alert("Something went wrong")
                }else{
                  localStorage.setItem("token",res.data.token)
                  localStorage.setItem("user",JSON.stringify(res.data.user))
                  this.authService.isLoggedIn.next(true)
                  this.route.navigate(['/'])
                }
          })
      }

      toRegister(){
        this.route.navigate(['register'])
      }
}
