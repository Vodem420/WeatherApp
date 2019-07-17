import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFound404Component} from './body/not-found404/not-found404.component';
import {SignUpComponent} from './body/sign-up/sign-up.component';
import {SignInComponent} from './body/sign-in/sign-in.component';
import {HomeComponent} from './body/mainPage/home.component';
import { AboutComponent } from './body/about/about.component';
import {UserPageComponent} from './body/user-page/user-page.component';

const routes: Routes = [
    { path: 'login', pathMatch: 'full', component: SignInComponent},
    { path: 'register', pathMatch: 'full', component: SignUpComponent},
    { path: 'about', pathMatch: 'full', component: AboutComponent},
    { path: 'userPage', pathMatch: 'full', component: UserPageComponent},
    { path: '', pathMatch: 'full', component: HomeComponent},
    { path: '**', pathMatch: 'full', component: NotFound404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
