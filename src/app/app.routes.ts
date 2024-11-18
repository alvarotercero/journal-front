import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageEdicionComponent } from './pages/dashboard/page-edicion/page-edicion.component';
import { PageNoticiasDashboardComponent } from './pages/dashboard/page-noticias-dashboard/page-noticias-dashboard.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageVistaNoticiaComponent } from './pages/page-vista-noticia/page-vista-noticia.component';



export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: PageHomeComponent },
    { path: 'login', component: PageLoginComponent },
    { path: 'noticias/:categoria/:noticiaSlug', component: PageVistaNoticiaComponent },
    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: 'noticias' },
            { path: 'noticias', component: PageNoticiasDashboardComponent }
            // { path: 'editar-noticia/:noticiaId', component: PageEditarNoticiaComponent}
        ]
    }
];
