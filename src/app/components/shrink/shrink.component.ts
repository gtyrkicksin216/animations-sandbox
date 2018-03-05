import { Component, HostBinding } from '@angular/core';
import { fadeAnimation } from '@constants/animations';

@Component({
  selector: 'shrink',
  templateUrl: './shrink.component.html',
  styleUrls: [ './shrink.component.scss' ],
  animations: [ fadeAnimation ],
})

export class ShrinkComponent {

  // @HostBinding('@fadeAnimation') fadeAnimation;

}

