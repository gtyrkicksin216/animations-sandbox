import { Component } from '@angular/core';
import { BUTTONS } from '@constants/route-links';

@Component({
  selector: 'nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: [ './nav-links.component.scss' ],
})

export class NavLinksComponent {

  buttons = BUTTONS;

}
