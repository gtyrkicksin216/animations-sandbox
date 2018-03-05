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


export const fadeIn = animation([
  style({ opacity: 0 }),
  animate('{{time}}', style({ opacity: 1 })),
]);

export const fadeOut = animation([
  style({ opacity: 1 }),
  animate('{{time}}', style({ opacity: 0 })),
]);

export const fadeAnimation =
  trigger('fadeAnimation', [
    transition(':enter', [
      // style({ opacity: 0 }),
      // animate('2000ms ease', style({ opacity: 1 })),
      useAnimation(fadeIn),
    ]),
    transition(':leave', [
      // style({ opacity: 1 }),
      // animate('2000ms ease', style({ opacity: 0 }))
      useAnimation(fadeOut),
    ])
  ]);

export const sliderAnimation =
  trigger('slideAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('2000ms ease', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('2000ms ease', style({ opacity: 0 })),
    ]),
  ]);

export const spinnerAnimation =
  trigger('spinAnimation', [
    transition(':enter', [
      style({ transform: 'rotate(0deg)', transformOrigin: 'center', opacity: 0 }),
      animate('2000ms ease', style({ transform: 'rotate(360deg)', transformOrigin: 'center', opacity: 1 })),
    ]),
    transition(':leave', [
      style({ transform: 'rotate(0deg)', transformOrigin: 'center' }),
      animate('2000ms ease', style({ transform: 'rotate(-360deg)', transformOrigin: 'center', opacity: 0 })),
    ]),
  ]);



// This is now working but it is waiting 2000ms before actually running the switch
export const routerAnimations =
  trigger('routeAnimation', [
    transition('* <=> *', [ // Any state to any state
      query(':enter', [ // look for anything entering or leaving inside of bound element
        // style({ opacity: 0 }), // set an initial style
        // animate('2000ms ease', style({ opacity: 1 })), // animate when enter
        // or use the fadeIn animation to do this
        useAnimation(fadeIn, {
          params: {
            time: '1000ms',
          }
        }),
      ], { optional: true }),
      // Do the same for leave
      query(':leave', [
        useAnimation(fadeOut, {
          params: {
            time: '500ms',
          }
        }),
      ], { optional: true }),
    ]),
  ]);
