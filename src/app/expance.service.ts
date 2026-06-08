import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpanceService {
  token1:any;

  constructor(public http : HttpClient) { }

  url:string = "https://expance-backend-vj1d.onrender.com/api/expance/"

  getExpance(){
    return this.http.get(this.url)
  }
  
  postExpance(expance:any){
    this.token1 = localStorage.getItem("token");
    const headers = new HttpHeaders().set('token', this.token1);
    return this.http.post(this.url, expance, { headers });
  }

  deleteExpance(_id:any){
    return this.http.delete(this.url+_id)
  }

  getById(_id:any){
    return this.http.get(this.url+_id)
  }

  updateExpance(expance:any){
    return this.http.put(this.url+expance._id,expance)
  }

}
