import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/service.service';
import { FormBuilder } from '@angular/forms';

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
                <form [formGroup]="checkoutForm"  class="Form">
                    <input type="text" class="formControl"  formControlName="nickname" placeholder="Nickname">
                    <input type="email" class="formControl"  formControlName="EmailAddress" placeholder="E-mail">
                    <input type="password" class="formControl"  formControlName="Password" placeholder="Password">
                </form>
                <div class="buttonContent">
                    <button class="confirmButton" type="submit" (click)="callServerForSignUp()">Confirm</button>
                </div>
            </div>
        </div>
    </div>`,
})
export class SignUpComponent implements OnInit {
    items;
    checkoutForm;

  constructor(
      private serviceService: ServiceService,
      private formBuilder: FormBuilder, ) {

      this.checkoutForm = this.formBuilder.group({
          nickname: '',
          EmailAddress: '',
          Password: '',
      });
  }

    callServerForSignUp() {
        console.log('test');
        this.serviceService.callServerForSignUp();
    }

  ngOnInit() {}
}
