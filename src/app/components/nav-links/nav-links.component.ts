import { Component } from '@angular/core';
import { BUTTONS } from '@constants/route-links';

import { Router } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  // tslint:disable-next-line
  selector: 'nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: [ './nav-links.component.scss' ],
})

export class NavLinksComponent {

  buttons = BUTTONS;

  constructor(private router: Router, private location: Location) { }

  goToPage(e) {
    if (this.location.path() === `/${e}`) {
      console.error(`YOU'RE ALREADY THERE!`);
    } else {
      this.router.navigate([e]);
      console.log(`navigating`);
    }
  }

}
