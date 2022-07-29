import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  changeWork: number = 1;
  work: any[] = [['myWork_all', 'myWork_all', 'myWork_all', 'myWork_all'],
  ['myWork_angular', 'myWork_angular', 'myWork_angular', 'myWork_angular'],
  ['myWork_javaScript', 'myWork_javaScript', 'myWork_javaScript', 'myWork_javaScript']];

  constructor() { }

  ngOnInit(): void {
  }

  myWork(value) {
    this.changeWork = value;
  }

}
