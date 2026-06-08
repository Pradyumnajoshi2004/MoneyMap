import { Component } from '@angular/core';
import { ExpanceService } from '../expance.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postexpance',
  imports: [FormsModule],
  templateUrl: './postexpance.component.html',
  styleUrl: './postexpance.component.css'
})
export class PostexpanceComponent {

  data:any = {}

  user_id:any

  expanceObj:any = {
      title:"",
      price:null,
      type:"",
      user_id:""
  }

    constructor(public expance : ExpanceService , public route : Router) {}

    handleSubmit(){
      if(!this.expanceObj.title || !this.expanceObj.price || !this.expanceObj.type){
        alert("All Fields Are Required")
        return ;
      }
      this.user_id = localStorage.getItem("user")
      console.log(JSON.parse(this.user_id));
      
      this.expanceObj.user_id = JSON.parse(this.user_id)
      this.expance.postExpance(this.expanceObj).subscribe(()=>{
        alert("the data is added successfully")
        this.route.navigate([""])
      })
    }


}
