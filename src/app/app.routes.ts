import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '', component: PageHomeComponent }
];
