import {
  animation,
  trigger,
  state,
  query,
  animate,
  transition,
  style,
  useAnimation,
  animateChild,
  AnimationOptions,
  group,
} from '@angular/animations';

/**
 * Just an example. In order to bind to the host you can do it from the TS file
 * or you can use [@specialtyBinding] for animations with the trigger name
 */
// export const fadeAnimations =
//   trigger('routerAnimations', [ // declare trigger name
//     transition('* <=> *', [ // from any state to any state (controled by activatedRotueData)
//       style({ opacity: 0 }), // initial styling
//       animate('1200ms ease', style({ opacity: 1 })), // animation and end style
//     ]),
//   ]);

  /**
   * You can use an external animation by doing:
   *
   * export const testAnimation = animation([
   *  style({...}),
   *  animate(..., style({...})),
   * ]);
   *
   * Then you would use `useAnimation(animationName)` after you declare your trigger;
   */

export const SLIDER = animation([
  style({ left: '50%' }),
  animate('1000ms ease-in-out', style({ left: '-150%' })),
]);

export const routerAnimations =
  trigger('routeAnimations', [
    transition('slider => spinner', [
      useAnimation(SLIDER)
    ])
  ]);

