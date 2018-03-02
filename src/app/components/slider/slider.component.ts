import { Component } from '@angular/core';
import { routerAnimations } from '@constants/animations';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: [ './slider.component.scss' ],
  animations: [ routerAnimations ],
})

export class SliderComponent {

  logAction(e: Event) {
    console.log(`CHILD: ${e}`);
  }

}

