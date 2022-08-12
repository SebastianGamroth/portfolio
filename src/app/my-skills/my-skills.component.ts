import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
  mySkillsJSON = [
    {
      'name': 'Java script',
      'pic': 'javaScript'
    },
    {
      'name': 'Angular',
      'pic': 'angular'
    },
    {
      'name': 'HTML / CSS',
      'pic': 'htmlCss'
    },
    {
      'name': 'SCRUM',
      'pic': 'scrum'
    },
    {
      'name': 'Git',
      'pic': 'git'
    },
    {
      'name': 'Design Thinking',
      'pic': 'designThinkin'
    },
    {
      'name': 'Rest API',
      'pic': 'restApi'
    },
    {
      'name': 'Test automation',
      'pic': 'testAutomation'
    },
    {
      'name': 'Databases',
      'pic': 'databases'
    }
  ]

  constructor() { }

  ngOnInit(): void { }

}
