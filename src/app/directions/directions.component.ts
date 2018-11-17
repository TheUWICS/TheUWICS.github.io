import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {

  locations: string[] = ['Quadrangle', 'Daaga Auditorium', 'LRC Greens'];
  selectedValue: string;
  countryForm: FormGroup;
  current_location_src: string;
  placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
    'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo consequat.';

  steps: string[];
  rotated = false;

  constructor() {
    this.countryForm = new FormGroup({
      country: new FormControl(null)
    });

  }

  ngOnInit() {
  }

  rotateIcons(event) {

    var icon;
    switch (event.target.tagName) {
      case 'DIV':
        icon = event.target.children[1];
        break;

      case 'H4':
        icon = event.target.nextSibling;
        break;

      default:
        icon = event.target;
    }

    console.log(icon);
    console.log(this.selectedValue);

    if (icon.classList.contains('rotated')) {
      icon.classList.remove('rotated');
    }
    else {
      icon.classList.add('rotated');
    }
  }

  getSrc(event) {
    console.log(event);
    this.current_location_src = environment.locations[event];
    this.steps = environment.directions.south_gate;

  }
}
