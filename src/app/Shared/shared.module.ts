import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './Components/errors/not-found/not-found.component';
import { ValidationMessagesComponent } from './Components/errors/validation-messages/validation-messages.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NotificationComponent } from './Components/modals/notification/notification.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    NotFoundComponent,
    ValidationMessagesComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ValidationMessagesComponent
  ]
})
export class SharedModule { }
