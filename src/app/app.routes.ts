import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NoticiasDashboardComponent } from './pages/dashboard/noticias-dashboard/noticias-dashboard.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: PageHomeComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: 'noticias' },
            { path: 'noticias', component: NoticiasDashboardComponent }
            // { path: 'notcia/:noticiaId', com}
        ]
    }
];
