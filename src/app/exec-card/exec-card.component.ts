import {Component, HostListener, Input, OnInit} from '@angular/core';
import {UwicsExec} from '../../assets/interfaces';

@Component({
  selector: 'app-exec-card',
  templateUrl: './exec-card.component.html',
  styleUrls: ['./exec-card.component.scss']
})
export class ExecCardComponent implements OnInit {
  @Input() exec: UwicsExec;
  hideDesc = false;
  constructor() {

  }

  ngOnInit() {


  }

@HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth >= 768) {
      this.hideDesc = true;
    } else { this.hideDesc = false; }
  }

}
