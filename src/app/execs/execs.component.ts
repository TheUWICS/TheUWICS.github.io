import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-execs',
  templateUrl: './execs.component.html',
  styleUrls: ['./execs.component.scss']
})
export class ExecsComponent implements OnInit {
  allExecs = {
    'president': {
      name: 'Rachel Peters',
      position: 'President',
      description: '...',
      email: 'uwics.president@gmail.com',
      image: 'assets/exec-pics/rachel.jpg'
    },
    'vice_pres': {
      name: 'Akil Hosang',
      position: 'Vice-President',
      description: '...',
      email: 'uwics.vpresident@gmail.com',
      image: 'assets/exec-pics/akil.jpeg'
    },
    'media': {
      name: 'Justin Ramjattan',
      position: 'Media Manager',
      description: '...',
      email: 'uwics.media@gmail.com',
      image: 'assets/exec-pics/justin.jpg'
    },
    'events': {
      name: 'David Zachary Orr',
      position: 'Events Coordinator',
      description: '...',
      email: 'uwics.events@gmail.com',
      image: 'assets/exec-pics/zachary.jpeg'
    },
    'secretary': {
      name: 'Tianna Corrie',
      position: 'Secretary',
      description: '...',
      email: 'uwics.secretary@gmail.com',
      image: 'assets/exec-pics/tianna.jpg'
    },
    'treasurer': {
      name: 'Randell Persad',
      position: 'Treasurer',
      description: '...',
      email: 'uwics.treasurer@gmail.com',
      image: 'assets/exec-pics/randell.jpg'
    },
    'web1': {
      name: 'Gabriela Sewdhan',
      position: 'Web Master',
      description: '...',
      email: 'uwics.webmaster@gmail.com',
      image: 'assets/exec-pics/gabriela.jpg'
    },
    'web2': {
      name: 'Qarun Bissoondial',
      position: 'Web Master',
      description: '...',
      email: 'uwics.webmaster@gmail.com',
      image: 'assets/exec-pics/qarun.jpeg'
    },
    'public': {
      name: 'Keanu Nichols',
      position: 'Public Relations Officer',
      description: '...',
      email: 'uwics.pro@gmail.com',
      image: 'assets/exec-pics/keanu.jpeg'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
