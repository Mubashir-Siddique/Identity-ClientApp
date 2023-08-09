import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './Components/errors/not-found/not-found.component';
import { ValidationMessagesComponent } from './Components/errors/validation-messages/validation-messages.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    NotFoundComponent,
    ValidationMessagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ValidationMessagesComponent
  ]
})
export class SharedModule { }
