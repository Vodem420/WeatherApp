import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WeatherItemComponent, WeatherListComponent, WeatherSearchComponent } from './bodyn/weather/index';
import { SideBarComponent } from './sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BodynComponent } from './bodyn/bodyn.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './bodyn/sign-in/sign-in.component';
import { SignUpComponent } from './bodyn/sign-up/sign-up.component';
import { HomeComponent } from './bodyn/home/home.component';
import { NotFound404Component } from './bodyn/not-found404/not-found404.component';


const routes: Routes = [
    { path: 'login', component: SignInComponent},
    { path: 'register', component: SignUpComponent},
    { path: '', component: HomeComponent},
    { path: '**', component: NotFound404Component},
];

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes), ],
  declarations: [
    AppComponent,
    HelloComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    SideBarComponent,
    HeaderComponent,
    BodynComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    NotFound404Component,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
