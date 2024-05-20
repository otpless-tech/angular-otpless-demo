import { Routes } from '@angular/router';
import { PrebuiltComponent } from './prebuilt/prebuilt.component';
import { HeadlessComponent } from './headless/headless.component';

export const routes: Routes = [
  { path: 'prebuilt', component: PrebuiltComponent },
  { path: 'headless', component: HeadlessComponent },
  { path: '', redirectTo: '/prebuilt', pathMatch: 'full' }, // default route
];
