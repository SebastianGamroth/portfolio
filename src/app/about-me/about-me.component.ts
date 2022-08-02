import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  image: any[] = [['walk-line'],['heart-line'],['search-line'],['flight-takeoff-line']];
  description: any[] = [
    ['Lorem, ipsum dolor sit amet consectetur adipisicing elit.'],
    ['Lorem, ipsum dolor sit amet consectetur adipisicing elit.'],
    ['Lorem, ipsum dolor sit amet consectetur adipisicing elit.'],
    ['Lorem, ipsum dolor sit amet consectetur adipisicing elit.']
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
