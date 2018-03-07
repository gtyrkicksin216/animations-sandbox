import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '@components/components.module';

import { ROUTES, ROUTE_DATA } from '@routing/routes';

import { SliderComponent } from '@components/slider/slider.component';
import { SpinnerComponent } from '@components/spinner/spinner.component';
import { ShrinkComponent } from '@components/shrink/shrink.component';
import { ChildStaggerComponent } from '@components/child-stagger/child-stagger.component';

// Import components

// const routes: Routes = [
//   { path: '', redirectTo: ROUTES.SLIDER, pathMatch: 'full', data: { state: ROUTES.SLIDER } },
//   // { path: ROUTES.NAME, component: ComponentName, data: { state: '' } },
//   { path: ROUTES.SLIDER, component: SliderComponent, data: { state: ROUTES.SLIDER } },
//   { path: ROUTES.SPINNER, component: SpinnerComponent, data: { state: ROUTES.SPINNER } },
//   { path: ROUTES.SHRINK, component: ShrinkComponent, data: { state: ROUTES.SHRINK } },
//   { path: ROUTES.CHILD_STAGGER, component: ChildStaggerComponent, data: { state: ROUTES.CHILD_STAGGER } },
// ];

const routes: Routes = ROUTE_DATA.map((route) => {
  return {
    path: route.path,
    component: route.component,
    data: route.data,
  };
});

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }
