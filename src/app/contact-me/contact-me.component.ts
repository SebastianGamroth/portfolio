import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
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

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.endpoint = "https://sebastian-gamroth.developerakademie.net/portfolio/send_mail.php";
  }

  sendEmail() {
    //You may also want to check the response. But again,   let's keep it simple.
    this.http.post(this.endpoint, this.postData)
      .subscribe(
        response => console.log(response),
        response => console.log(response)
      )


  }

  getDate(date: NgForm) {
    this.postData = date;
    this.sendEmail();
  }

  // checkFormValidation() {
  //   console.log('ok')
  //   this.sendMessage();
  // }

  // sendMessage() {
  //   console.warn(this.name, this.email, this.message)
  // }

}
