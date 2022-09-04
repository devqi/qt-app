import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let navItems = document.querySelector('#deszmenu > ul > li > a.nav-item');
  }

  go(site: string): void {
    if (site === 'blogs') {
      window.location.href = 'https://blogs.qodetribe.com';
    }
  }
}
