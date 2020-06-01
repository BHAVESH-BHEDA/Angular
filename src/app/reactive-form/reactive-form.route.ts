import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form.component';


const routes: Routes = [
  { path: 'reactive-form', component: ReactiveFormComponent },
];

export const ReactiveFormRoute = RouterModule.forChild(routes);


