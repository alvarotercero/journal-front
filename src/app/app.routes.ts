import { Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [

    { path: '', component: LoginComponent }

=======
import { PageHomeComponent } from './pages/page-home/page-home.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '', component: PageHomeComponent }
>>>>>>> bbe599c011b450826cbe6b9361c9203a174b5239
];
