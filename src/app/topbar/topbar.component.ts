import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  private themeWrapper;
  dark = true;
  constructor() {}

  ngOnInit() {
    this.themeWrapper = document.querySelector('html');
  }

  toggleTheme() {
    if (this.dark) {
      this.themeWrapper.classList.remove('dark-theme');
      this.themeWrapper.classList.add('light-theme');
    } else {
      this.themeWrapper.classList.remove('light-theme');
      this.themeWrapper.classList.add('dark-theme');
    }

    this.dark = !this.dark;
  }
}
