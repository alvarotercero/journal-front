import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-noticia-slider-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './noticia-slider-item.component.html',
  styleUrl: './noticia-slider-item.component.css'
})
export class NoticiaSliderItemComponent {
  @Input() miNoticia?: INoticia | any;



}
