import { Component, HostBinding } from '@angular/core';
import { fadeAnimation } from '@constants/animations';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: [ './slider.component.scss' ],
  animations: [ fadeAnimation ],
})

export class SliderComponent {

  // @HostBinding('@fadeAnimation') fadeAnimation;

  logAction(e: Event) {
    console.log(`CHILD: ${e}`);
  }

}

