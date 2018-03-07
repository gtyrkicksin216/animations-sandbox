import { SliderComponent } from '@components/slider/slider.component';
import { SpinnerComponent } from '@components/spinner/spinner.component';
import { ShrinkComponent } from '@components/shrink/shrink.component';
import { ChildStaggerComponent } from '@components/child-stagger/child-stagger.component';


export const ROUTES = {
  // NAME: 'slug<string>'
  SLIDER: 'slider',
  SPINNER: 'spinner',
  SHRINK: 'shrink',
  CHILD_STAGGER: 'child-stagger',
};

// export const ROUTE_ARRAY: Array<string> = [
//   // ROUTES.NAME
//   ROUTES.SLIDER,
//   ROUTES.SPINNER,
//   ROUTES.SHRINK,
//   ROUTES.CHILD_STAGGER,
// ];

export const ROUTE_DATA = [
  // { path: '', redirectTo: ROUTES.SLIDER, pathMatch: 'full', data: { state: ROUTES.SLIDER } },
  // { path: ROUTES.NAME, component: ComponentName, data: { state: '' } },
  { path: ROUTES.SLIDER, component: SliderComponent, data: { state: ROUTES.SLIDER } },
  { path: ROUTES.SPINNER, component: SpinnerComponent, data: { state: ROUTES.SPINNER } },
  { path: ROUTES.SHRINK, component: ShrinkComponent, data: { state: ROUTES.SHRINK } },
  { path: ROUTES.CHILD_STAGGER, component: ChildStaggerComponent, data: { state: ROUTES.CHILD_STAGGER } },
];
