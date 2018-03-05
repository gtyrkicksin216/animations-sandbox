import { Component, HostBinding } from '@angular/core';
import { routerAnimations } from '@constants/animations';
// Import your animations
// import { routerAnimation } from '@constants/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerAnimations ], // add any animations here
})
export class AppComponent {
  title = 'app';

  // @HostBinding('@routerAnimation') routerAnimations;

  /**
   * To use your component's state you will have to use a local variable on your
   * router outlet, and reference it in your `getState(localVar)` method [#localVar="outlet"]
   * and pass that into your component's TS file
   * once it's in there you can use:
   * return localVar.activatedRouteData ? localVar.activatedRouteData.name : '';
   * to log the state changes
   */

   getState(route) {
     console.log(route.activatedRouteData.state);
     return route.activatedRouteData ? route.activatedRouteData.state : '';
   }

   logAnimation(e) {
     console.log(e);
   }
}
