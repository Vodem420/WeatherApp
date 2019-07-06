import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
    template: `<div class="container">
        <div class="content">
            <div class="titleContent">
                <span class="Title">Registration</span>
                <div class="line"></div>
            </div>
            <div class="formContent">
                <form action="" class="Form">
                    <input type="text" class="formControl" placeholder="Nickname">
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
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
