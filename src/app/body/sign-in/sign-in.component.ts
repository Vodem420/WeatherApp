import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/service.service';
import { FormBuilder } from '@angular/forms';

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
            <form action="" class="Form" [formGroup]="checkoutForm">
                <input type="email" class="formControl" placeholder="E-mail" formControlName="EmailAddress">
                <input type="password" class="formControl" placeholder="Password" formControlName="Password">
            </form>
            <div class="buttonContent">
                <button class="confirmButton" type="submit" (click)="callServerForSignIn(checkoutForm.value)">Confirm</button>
            </div>
        </div>
        </div>
    </div>`,
})
export class SignInComponent implements OnInit {
    items;
    checkoutForm;

  constructor(private serviceService: ServiceService,
              private formBuilder: FormBuilder, ) {
      this.checkoutForm = this.formBuilder.group({
          EmailAddress: '',
          Password: '',
      });
  }

    callServerForSignIn(data) {
        console.log('data: ', data);
        this.serviceService.callServerForSignIn(data);
    }

    ngOnInit() {
    }

}
