import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavLinksComponent } from '@components/nav-links/nav-links.component';
import { ShrinkComponent } from '@components/shrink/shrink.component';
import { SliderComponent } from '@components/slider/slider.component';
import { SpinnerComponent } from '@components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NavLinksComponent,
    ShrinkComponent,
    SliderComponent,
    SpinnerComponent,
  ],
  exports: [
    NavLinksComponent,
    ShrinkComponent,
    SliderComponent,
    SpinnerComponent,
  ],
})

export class ComponentsModule { }
