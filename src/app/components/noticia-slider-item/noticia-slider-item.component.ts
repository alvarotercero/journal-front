import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { RouterLink } from '@angular/router';
import { RecortarTextoPipe } from '../../pipes/recortar-texto.pipe';

@Component({
  selector: 'app-noticia-slider-item',
  standalone: true,
  imports: [RouterLink, RecortarTextoPipe],
  templateUrl: './noticia-slider-item.component.html',
  styleUrl: './noticia-slider-item.component.css'
})
export class NoticiaSliderItemComponent {
  @Input() miNoticia?: INoticia;
}
