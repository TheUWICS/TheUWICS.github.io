import { Component, OnInit } from '@angular/core';
import {SlideInOutAnimation} from "../../animations";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
  animations: [SlideInOutAnimation]

})
export class SessionsComponent implements OnInit {

  numSteps: number;


  /*
    - Get animation file
    - Assign Animation state
    - Test animation file on changing panels

   */

  constructor() { }

  ngOnInit() {
  }

}
