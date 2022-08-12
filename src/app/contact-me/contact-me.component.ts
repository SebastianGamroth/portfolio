import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  // name: string;
  // email: string;
  // message: string;
  endpoint: string;
  postData: any = {
    'name': 'name',
    'email': 'email',
    'message': 'message',
  };

  getform: FormGroup;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.endpoint = "https://sebastian-gamroth.developerakademie.net/portfolio/send_mail.php";
    this.getform = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  sendEmail() {
    this.http.post(this.endpoint, this.postData)
      .subscribe(
        response => console.log(response),
        response => console.log(response)
      )
    console.log('ok')

  }

  clicksub() {
    console.log(this.getform.value);

    this.postData = this.getform.value;
    this.sendEmail();

    this.getform.reset();
  }

  get name() {
    return this.getform.get('name');
  }

  get email() {
    return this.getform.get('email');
  }

}
