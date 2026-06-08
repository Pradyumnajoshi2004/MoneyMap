import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostexpanceComponent } from './postexpance/postexpance.component';
import { HistoryComponent } from './history/history.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [
    {path:"" , component : HomeComponent , pathMatch:'full' , canActivate:[AuthGuard]},
    {path:"postexpance",component:PostexpanceComponent , canActivate:[AuthGuard]},
    {path:"history",component:HistoryComponent},
    {path:"register",component:RegisterComponent},
    {path:"login",component:LoginComponent},
    {path:"update/:id",component:UpdateComponent}
];
