import { Component, OnInit } from '@angular/core';
import { ExpanceService } from '../expance.service';
import { CalcuateExpanceService } from '../calcuate-expance.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  data:any=[]
  price:any 
  totalval:any
  constructor(public calcuateExpance:CalcuateExpanceService) {}

  ngOnInit(): void {
      this.calcuateExpance.getData().subscribe((info:any)=>{
            this.data = info.data
            console.log(this.data);
            
      })
  }
}
