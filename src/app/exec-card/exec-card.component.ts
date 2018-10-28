import {Component, Input, OnInit} from '@angular/core';
import {UwicsExec} from '../../assets/interfaces';

@Component({
  selector: 'app-exec-card',
  templateUrl: './exec-card.component.html',
  styleUrls: ['./exec-card.component.scss']
})
export class ExecCardComponent implements OnInit {
  @Input() exec: UwicsExec;
  emailString: string;
  constructor() {

  }

  ngOnInit() {
    this.emailString = 'mailto:' + this.exec.email;

  }

}
