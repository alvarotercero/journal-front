import { PageActivarComponent } from './pages/page-activar/page-activar.component';
import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageEdicionComponent } from './pages/dashboard/page-edicion/page-edicion.component';
import { PageNoticiasDashboardComponent } from './pages/dashboard/page-noticias-dashboard/page-noticias-dashboard.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageVistaNoticiaComponent } from './pages/page-vista-noticia/page-vista-noticia.component';
import { loginGuard } from './guards/login.guard';
import { PageCreacionComponent } from './pages/dashboard/page-creacion/page-creacion.component';
import { PageBusquedaComponent } from './pages/page-busqueda/page-busqueda.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'noticias/home' },
    { path: 'noticias/:categoria', component: PageHomeComponent },
    { path: 'login', component: PageLoginComponent },
    { path: 'noticias/:categoria/:noticiaSlug', component: PageVistaNoticiaComponent },
    { path: 'busqueda', component: PageBusquedaComponent },
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [loginGuard], children: [
            { path: '', pathMatch: 'full', redirectTo: 'noticias' },
            { path: 'noticias', component: PageNoticiasDashboardComponent },
            { path: 'editar-noticia/:noticiaId', component: PageEdicionComponent },
            { path: 'crear-noticia', component: PageCreacionComponent }
        ]
    },
    { path: 'activar/:id/:activo/:token', component: PageActivarComponent }, //donde :activo llevará 1 o 0 para activar o desactivar y :token arrastra el token desde el enlace del mail
    {
        path: '**', redirectTo: 'noticias/home'
    }
];
