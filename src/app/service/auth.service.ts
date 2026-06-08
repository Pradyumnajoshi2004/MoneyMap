import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { routes } from '../app.routes';
import { Route, Router } from '@angular/router';
import { Observable, Subject , BehaviorSubject , map, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  


  isLoggedIn = new Subject() 
  isLoggedIn$ = this.isLoggedIn.asObservable()

  constructor(public http : HttpClient , public route : Router) { }

  url:string = "https://expance-backend-vj1d.onrender.com/api/user/"

  register(user:any){
    return this.http.post(this.url,user)
  }

  login(user:any){
    return this.http.post(this.url+"login",user)
  }


// login(user: any): Observable<boolean> {
//   return this.http.post<any>(this.url + "login", user).pipe(
//     map((res: any) => {
//       localStorage.setItem("token", res.data.token);
//       this.isLoggedIn.next(true);
//       return true;
//     }),
//     catchError((err: any, caught: Observable<boolean>): Observable<boolean> => {
//       console.error("Login error:", err);
//       this.isLoggedIn.next(false)
//       return throwError(() => new Error('Login failed. Please try again.',err));
//     })
//   );
// }


  // (res:any)=>{
  //     // console.log(res);
  //     // localStorage.setItem("token",res.data.token)
  //     // alert("Logged successfully")
  //     // this.route.navigate(['/'])
  //   }

  logOut(){
    localStorage.clear()
    this.isLoggedIn.next(false)
    this.route.navigate(['/login'])
  }

  isLogin(){
    const token = localStorage.getItem("token")
    if(token){ 
      this.isLoggedIn.next(true)
      return true
    }else{
      this.isLoggedIn.next(false)
      return false
    }
  }
}
