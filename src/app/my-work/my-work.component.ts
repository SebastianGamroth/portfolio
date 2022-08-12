import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  projectJSON: any[] = [
    {
      'img': 'NB3',
      'name': 'Angular',
      'description': 'Portfolio based on Angular and Material Design',
      'path': 'https://sebastian-gamroth.developerakademie.net/portfolio/'
    },
    {
      'img': 'NB5',
      'name': 'Angular',
      'description': 'Ring-Of-Fire based on Angular and Material Design',
      'path': 'https://sebastian-gamroth.developerakademie.net/ringoffire/'
    },
    {
      'img': 'NB1',
      'name': 'Angular',
      'description': 'Simple-CRM based on Angular and Material Design',
      'path': 'https://sebastian-gamroth.developerakademie.net/simple-crm/'
    },
    {
      'img': 'NB4',
      'name': 'Angular',
      'description': 'CRM-app based on Angular and Material Design',
      'path': 'https://sebastian-gamroth.developerakademie.net/simple-crm/'
    },
    {
      'img': 'NB4',
      'name': 'JavaScript',
      'description': 'CRM-app based on Java Script',
      'path': 'https://sebastian-gamroth.developerakademie.net/simple-crm/'
    },
    {
      'img': 'NB6',
      'name': 'JavaScript',
      'description': 'Kanban based on Java Script',
      'path': 'https://sebastian-gamroth.developerakademie.net/Kanban/index.html'
    },
    {
      'img': 'NB7',
      'name': 'JavaScript',
      'description': 'Pokedex based on Java Script',
      'path': 'https://sebastian-gamroth.developerakademie.net/Pokedex/index.html'
    },
    {
      'img': 'NB4',
      'name': 'JavaScript',
      'description': 'ElPolloLoco based on Java Script',
      'path': 'https://sebastian-gamroth.developerakademie.net/ElPolloLoco/index.html'
    }
  ]
  projectContainer: any;

  constructor() { }


  ngOnInit(): void {
    this.myWork('All');
  }


  myWork(value: string) {
    let change = this.projectJSON.filter(t => t['name'] == value);
    this.projectContainer = change;

    if (value == 'All') {
      this.projectContainer = this.projectJSON;
    }
  }

}