import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-project',
  templateUrl: './work-project.component.html',
  styleUrls: ['./work-project.component.scss']
})
export class WorkProjectComponent implements OnInit {
  changeText: boolean;
  @Input() projectNr: any;

  constructor() { }

  ngOnInit(): void {
  }

}
