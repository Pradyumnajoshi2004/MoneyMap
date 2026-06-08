import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcuateExpanceService {

  url:string = "https://expance-backend-vj1d.onrender.com/api/calcuate"

  constructor(public http : HttpClient) { }

    getData(){
      return this.http.get(this.url)
  }
}
