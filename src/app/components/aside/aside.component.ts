import { Component } from '@angular/core';
import { FormularioSuscripcionComponent } from "../formulario-suscripcion/formulario-suscripcion.component";
import { TrendingComponent } from "../trending/trending.component";
import { UltimasPopularesComponent } from "../ultimas-populares/ultimas-populares.component";

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [FormularioSuscripcionComponent, TrendingComponent, UltimasPopularesComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

}
