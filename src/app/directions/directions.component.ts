import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {

  steps: string[];

  constructor() { }

  ngOnInit() {
    this.steps = environment.directions.north_gate;
  }

}
