import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  contactFormModalEmail = new FormControl('', Validators.email);
  contactFormModalSubject = new FormControl('', Validators.required);
  contactFormModalMessage = new FormControl('', Validators.required);

  constructor() {}

  ngOnInit() {
  }

}
