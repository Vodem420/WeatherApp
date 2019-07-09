import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFound404Component} from './body/not-found404/not-found404.component';
import {SignUpComponent} from './body/sign-up/sign-up.component';
import {SignInComponent} from './body/sign-in/sign-in.component';
import {HomeComponent} from './body/mainPage/home.component';

const routes: Routes = [
    { path: 'login', component: SignInComponent},
    { path: 'register', component: SignUpComponent},
    { path: '', component: HomeComponent},
    { path: '**', component: NotFound404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
