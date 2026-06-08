import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
        constructor (public route : Router , public authService : AuthService) {}

        regsiterObj = {
          name:"",
          email:"",
          password:""
        }

        handleSubmit(){
            
          if(!this.regsiterObj.name || !this.regsiterObj.email || !this.regsiterObj.password){
              alert("All Fields Are Required")
              return
          }

            this.authService.register(this.regsiterObj).subscribe((res:any)=>{
                  if (res.errors) {
                    alert("Something went worng")
                  } else {
                    alert("register successfully")
                    this.route.navigate(['/login'])
                  }
            },(error:any)=>{
              alert(error.message)
            })
        }

        

      toLogin(){
        this.route.navigate(['login'])  
      }

}
