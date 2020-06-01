import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven.component';


const routes: Routes = [
  { path: 'template-driven', component: TemplateDrivenComponent },
];

export const TemplateDrivenRoute = RouterModule.forChild(routes);
