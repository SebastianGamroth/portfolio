import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  // changeWork: number = 0;
  // changeText: boolean;

  projectJSON: any[] = [
    {
      'img': 'NB3',
      'name': 'Angular',
      'description': 'CRM-app based on Angular and Material Design',
      'path': 'https://sebastian-gamroth.developerakademie.net/simple-crm/'
    },
    {
      'img': 'NB4',
      'name': 'Angular',
      'description': 'CRM-app based on Angular and Material Design',
      'path': 'https://sebastian-gamroth.developerakademie.net/simple-crm/'
    },
    {
      'img': 'NB1',
      'name': 'Angular',
      'description': 'Simple CRM based on Angular and Material Design',
      'path': 'https://sebastian-gamroth.developerakademie.net/simple-crm/'
    },
    {
      'img': 'NB4',
      'name': 'Angular',
      'description': 'CRM-app based on Angular and Material Design',
      'path': 'https://sebastian-gamroth.developerakademie.net/simple-crm/'
    },
    {
      'img': 'NB5',
      'name': 'JavaScript',
      'description': 'CRM-app based on Angular and Material Design',
      'path': 'https://sebastian-gamroth.developerakademie.net/simple-crm/'
    },
    {
      'img': 'NB6',
      'name': 'JavaScript',
      'description': 'CRM-app based on Angular and Material Design',
      'path': 'https://sebastian-gamroth.developerakademie.net/simple-crm/'
    },
    {
      'img': 'NB7',
      'name': 'JavaScript',
      'description': 'CRM-app based on Angular and Material Design',
      'path': 'https://sebastian-gamroth.developerakademie.net/simple-crm/'
    },
    {
      'img': 'NB1',
      'name': 'JavaScript',
      'description': 'CRM-app based on Angular and Material Design',
      'path': 'https://sebastian-gamroth.developerakademie.net/simple-crm/'
    }
  ]

  projectContainer: any;

  constructor() {
    // this.changeText = false;
  }

  ngOnInit(): void {
    this.myWork('All');
  }

  myWork(value: string) {
    // this.changeWork = value;

    let change = this.projectJSON.filter(t => t['name'] == value);
    this.projectContainer = change;

    if (value == 'All') {
      this.projectContainer = this.projectJSON;
    }
  }

}