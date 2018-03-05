import { Component, HostBinding } from '@angular/core';
import { spinnerAnimation } from '@constants/animations';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: [ './spinner.component.scss' ],
  animations: [ spinnerAnimation ],
})

export class SpinnerComponent {

  // @HostBinding('@spinAnimation') spinnerAnimation;

}
