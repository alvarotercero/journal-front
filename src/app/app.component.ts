import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FormularioSuscripcionComponent } from "./components/formulario-suscripcion/formulario-suscripcion.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FormularioSuscripcionComponent, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cmsPeriodicoFrontEnd';
}
