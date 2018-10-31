import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  expanded = false;
  read = 'read more';
  about = 'The University of the West Indies Computing Society (UWICS) was established in 1996. The purpose of this society is to forge' +
    ' a plan that focuses on computing and information technology in everyday life. UWICS comprises of individuals who are enthusiastic ' +
    'about the interesting fascinations that can be done with technology whether it is learning about the world of programming, gaining a' +
    ' better understanding of how augmented reality works, exploring the graphical world involved in creating logos or being educated' +
    ' about the various jobs that are elaborated. We aim to foster an environment that is educational, entertaining and inspiring so ' +
    'that members are encouraged to discover and develop their knowledge in computing and information technology.';
  constructor() { }

  ngOnInit() {
  }

  expand() {
    this.expanded = !this.expanded;
    if (this.read === 'read more') {
      this.read = 'read less';
    } else {
      this.read = 'read more';
    }

  }

}
