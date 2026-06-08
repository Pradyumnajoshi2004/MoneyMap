import { Component, OnInit } from '@angular/core';
import { ExpanceService } from '../expance.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { elementAt } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  imports: [FormsModule,NgFor],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{

  data:any=[]


user_id:any


  selectedType:string="overall" 

  constructor (public expance : ExpanceService , public route : Router) {}

  ngOnInit(): void {
      this.handleSubmit()
  }

  getData(){
    this.expance.getExpance().subscribe((info:any)=>{
       this.user_id = localStorage.getItem("user")
       console.log(info.data.filter((el:any)=>el.user_id == JSON.parse(this.user_id)));
        this.data = info.data.filter((el:any)=>el.user_id == this.user_id)
    })
  }

  
  deleteData(id:any){
    this.expance.deleteExpance(id).subscribe(()=>{
          this.getData()
    })
  }

  editData(id:any){
    this.route.navigate([`update/${id}`])
  }

  handleSubmit(){
    this.expance.getExpance().subscribe((info:any)=>{
        if(this.selectedType == "income"){
          this.data = info.data.filter((element:any)=>element.type == 'income')
          
        } else if(this.selectedType == "expense"){
          this.data = info.data.filter((element:any)=>element.type =='expense')
          
        } else if(this.selectedType == "overall"){
          this.expance.getExpance().subscribe((info:any)=> this.data = info.data)
        } else {
          this.data = []
        }
    })

}

}
