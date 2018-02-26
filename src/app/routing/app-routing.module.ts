import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

import { ROUTES } from './routes';

// Import components

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', data: { /* animation states here */ } },
  // { path: ROUTES.NAME, component: ComponentName, data: { state: '' } },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }
