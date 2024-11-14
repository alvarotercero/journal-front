import { Component } from '@angular/core';
import { ListaNoticiasComponent } from "../../components/lista-noticias/lista-noticias.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListaNoticiasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
