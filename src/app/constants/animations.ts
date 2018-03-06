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

/**
 * declare all of your constants that you would want to use as your reusable animations
 * ie. any animation that would run both ways (:enter and :leave)
 */
export const centerAround = 'translate(-50%, -50%)';

export const fadeAnimation = animation([
  style({ opacity: '{{ from }}' }),
  animate('{{ time }} {{ timingFunc }}', style({ opacity: '{{ to }}' })),
]);

export const slideAnimation = animation([
  style({ left: '{{ from }}' }),
  animate('{{ time }} {{ timingFunc }}', style({ left: '{{ to }}' })),
]);

export const spinAnimation = animation([
  style({ transform: 'translate(-50%, -50%) rotate(0deg) scale({{ fromSize }})' }),
  animate('{{ time }} {{ timingFunc }}',
    style({ transform: 'translate(-50%, -50%) rotate({{ rotation }}) scale({{ toSize }})' })),
]);

export const popAnimation = animation([
  style({ transform: 'translate(-50%, -50%) scale({{ fromSize }})' }),
  animate('{{ time }} {{ timingFunc }}', style({ transform: 'translate(-50%, -50%) scale({{ toSize }})' })),
]);

/**
 * Set up the main animation that you will bind to your host
 */
export const routerAnimations =
  trigger('routeAnimation', [
    /**
     * When the transition will fire
     * * <=> * = any state to any state
     * * => void = :leave
     * void => * = :enter
     * [state] => [state] = specific state to another state
     * [state] <=> [state] = specific state to another state
     * [state] <= [state] = specific state to another state
     *
     */
    transition('* <=> *', [

      /**
       * query for specific elements or states and set the intial values
       */
      query('.slider', style({ left: '-50%' }), { optional: true }),
      query('.spinner', style({ transform: `rotate(0) scale(0)` }), { optional: true }),
      query('.shrink', style({ transform: `scale(0)` }), { optional: true }),

      /**
       * Query for the element leaving the page
       * *** THIS MUST COME FIRST ***
       */
      query(':leave', [
        /**
         * Query for your specific elements to apply the animations to:
         * -> Querying for class or ID names using query('.class')/query('#id')
         * -> Querying for newly inserted/removed elements using query(":enter")/query(":leave")
         * -> Querying all currently animating elements using query(":animating")
         * -> Querying elements that contain an animation trigger using query("@triggerName")
         * -> Querying all elements that contain an animation triggers using query("@*")
         * -> Including the current element into the animation sequence using query(":self")
         */
        query('.slider', [
          /**
           * This is where you will reuse your reusable animation
           */
          useAnimation(slideAnimation, {
            /**
             * If you have interpolated strings in your animation you can set those parameters here
             */
            params: {
              from: '50%',
              to: '250%',
              time: '800ms',
              timingFunc: 'ease',
            },
          }),
          /**
           * For every query you SHOULD use { optional: true }
           * Query looks for elements in the DOM and will fail if they do/dont exist
           */
        ], { optional: true }),
        query('.spinner', [
          useAnimation(spinAnimation, {
            params: {
              rotation: '-720deg',
              fromSize: '1',
              toSize: '0',
              time: '800ms',
              timingFunc: 'ease',
            },
          }),
        ], { optional: true }),
        query('.shrink', [
          useAnimation(popAnimation, {
            params: {
              fromSize: '1',
              toSize: '0',
              time: '800ms',
              timingFunc: 'cubic-bezier(1, -0.73, .08, 1.82)',
            },
          }),
        ], { optional: true }),
      ], { optional: true }),

      /**
       * After you have done everything for your :leave animations you
       * can declare your :enter transitions.
       * You will do the same thing here with your reusable animations,
       * just setting your parameters accordingly
       */
      query(':enter', [
        style({ zIndex: 1000 }),
        query('.slider', [
          useAnimation(slideAnimation, {
            params: {
              from: '-50%',
              to: '50%',
              time: '600ms',
              timingFunc: 'ease',
            },
          }),
        ], { optional: true }),
        query('.spinner', [
          useAnimation(spinAnimation, {
            params: {
              rotation: '720deg',
              fromSize: '0',
              toSize: '1',
              time: '600ms',
              timingFunc: 'ease',
            },
          }),
        ], { optional: true }),
        query('.shrink', [
          useAnimation(popAnimation, {
            params: {
              fromSize: '0',
              toSize: '1',
              time: '600ms',
              timingFunc: 'cubic-bezier(1, -0.73, .08, 1.82)',
            },
          }),
        ], { optional: true }),
      ], { optional: true }),

    ]),
  ]);

