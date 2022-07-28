import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
  mySkillsName = ['Java script', 'Angular', 'HTML / CSS', 'SCRUM', 'Git', 'Design Thinking', 'Rest API', 'Test automation', 'Databases'];
  mySkillsPics = ['javaScript', 'angular', 'htmlCss', 'scrum', 'git', 'designThinkin', 'restApi', 'testAutomation', 'databases'];

  constructor() { }

  ngOnInit(): void {
  }

}
