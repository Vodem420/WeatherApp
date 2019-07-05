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


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    SideBarComponent,
    HeaderComponent,
    BodynComponent,
    FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
