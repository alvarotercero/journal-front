import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-noticia-slider-item',
  standalone: true,
  imports: [],
  templateUrl: './noticia-slider-item.component.html',
  styleUrl: './noticia-slider-item.component.css'
})
export class NoticiaSliderItemComponent {
  @Input() miNoticia?: INoticia;

}
