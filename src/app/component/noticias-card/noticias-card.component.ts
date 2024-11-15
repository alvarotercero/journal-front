import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-noticias-card',
  standalone: true,
  imports: [],
  templateUrl: './noticias-card.component.html',
  styleUrl: './noticias-card.component.css'
})
export class NoticiasCardComponent {
  @Input() miNoticia?: INoticia;
}
