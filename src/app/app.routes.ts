import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: PageHomeComponent },
    { path: 'login', component: LoginComponent }
];
