import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
    template: `<div class="container">
        <div class="content">
            <div class="titleContent">
            <span class="Title">Authorization</span>
            <div class="line"></div>
            </div>
        <div class="formContent">
            <form action="" class="Form">
                <input type="email" class="formControl" placeholder="E-mail">
                <input type="password" class="formControl" placeholder="Password">
            </form>
            <div class="buttonContent">
                <button class="confirmButton">Confirm</button>
            </div>
        </div>
        </div>
    </div>`,
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
