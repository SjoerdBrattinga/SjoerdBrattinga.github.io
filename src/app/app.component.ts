import { Component, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  opened = true;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  ngOnInit() {    
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 64;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 64;
      this.opened = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 64;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 64;
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }

}