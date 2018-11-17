import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  private themeWrapper;
  dark = true;
  currentUrl = '/';

  constructor(private router: Router) {}
  currentPage = 'Home';

  ngOnInit() {


    this.themeWrapper = document.querySelector('html');
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationStart) {
        this.currentUrl = data.url;
        this.currentPage = data.url.substr(1);
        this.currentPage = this.currentPage.charAt(0).toUpperCase() + this.currentPage.substr(1);
      }
    });
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
