import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  constructor() { }

  ngOnInit(): void {
  }

}
