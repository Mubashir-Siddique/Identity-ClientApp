import { Component,OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  constructor(private accountService: AccountService, private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
