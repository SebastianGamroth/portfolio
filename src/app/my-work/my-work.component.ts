import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  changeWork: number = 0;

  work: any[] = [['NB1', 'NB2', 'NB3', 'NB4'],
  ['NB3', 'NB4', 'NB1', 'NB2'],
  ['NB5', 'NB6', 'NB7', 'NB1']];

  constructor() { }

  ngOnInit(): void {
  }

  myWork(value) {
    this.changeWork = value;
  }

}
