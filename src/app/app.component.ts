import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { AuthService } from './service/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend';
  isAuth:boolean = false

  constructor(public auth : AuthService) {}

  handleLogOut(){
      this.auth.logOut()
      }

  ngOnInit(): void {
      this.auth.isLoggedIn$.subscribe((val:any)=>{
          this.isAuth = val
      })
  }

}
