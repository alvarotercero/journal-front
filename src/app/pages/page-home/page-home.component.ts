import { Component } from '@angular/core';
import { DestacadosComponent } from "../../component/destacados/destacados.component";
import { NoticiasGeneralesComponent } from "../../component/noticias-generales/noticias-generales.component";
import { NoticiasSecundariasComponent } from "../../component/noticias-secundarias/noticias-secundarias.component";

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [DestacadosComponent, NoticiasGeneralesComponent, NoticiasSecundariasComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css'
})
export class PageHomeComponent {

}
