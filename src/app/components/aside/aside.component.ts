import { Component } from '@angular/core';
import { FormularioSuscripcionComponent } from "../formulario-suscripcion/formulario-suscripcion.component";
import { UltimasPopularesComponent } from "../ultimas-populares/ultimas-populares.component";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [FormularioSuscripcionComponent, UltimasPopularesComponent, SearchComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

}
