import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

//
import { WeatherItemComponent} from './body/weather/weather-item/weather-item.component';
import { WeatherListComponent} from './body/weather/weather-list/weather-list.component';
import { WeatherSearchComponent} from './body/weather/weather-search/weather-search.component';
//

import { SideBarComponent } from './body/sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BodynComponent } from './body/bodyn.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './body/sign-in/sign-in.component';
import { SignUpComponent } from './body/sign-up/sign-up.component';
import { HomeComponent } from './body/mainPage/home.component';
import { NotFound404Component } from './body/not-found404/not-found404.component';
import { AboutComponent } from './body/about/about.component';

const routes: Routes = [
    { path: 'login', component: SignInComponent},
    { path: 'register', component: SignUpComponent},
    { path: 'about', component: AboutComponent},
    { path: '', component: HomeComponent},
    { path: '**', component: NotFound404Component},
];

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes), ],
  declarations: [
    AppComponent,
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
    AboutComponent,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
