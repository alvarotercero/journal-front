import { Component, Input } from '@angular/core';
import { DestacadosComponent } from "../../components/destacados/destacados.component";
import { NoticiasGeneralesComponent } from "../../components/noticias-generales/noticias-generales.component";
import { NoticiasSecundariasComponent } from "../../components/noticias-secundarias/noticias-secundarias.component";

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [DestacadosComponent, NoticiasGeneralesComponent, NoticiasSecundariasComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css'
})
export class PageHomeComponent {
  @Input() categoria: string = '';
}
