import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  aboutMe: { image: string; title: string; description: string; }[] = [
    {
      'image': 'walk-line',
      'title': 'MY JOURNEY BEGAN',
      'description': 'I learned structured and analytical thinking in warehouse logistics.'
    },
    {
      'image': 'heart-line',
      'title': 'FIRST EXPERIENCES',
      'description': 'I discovered my fascination for programming in IT support.'
    },
    {
      'image': 'search-line',
      'title': 'MY SEARCH',
      'description': 'I took the opportunity to train as a frontend developer. At the Developer Academy I programmed several websites and apps, both alone and in a team.'
    },
    {
      'image': 'flight-takeoff-line',
      'title': 'NEW CHALLENGES',
      'description': 'I am happy to apply my experience with JavaScript, HTML/CSS and Angular as a junior developer.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
