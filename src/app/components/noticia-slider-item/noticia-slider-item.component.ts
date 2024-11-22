import { Component, Input, ViewEncapsulation } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { RouterLink } from '@angular/router';
import { RecortarTextoPipe } from '../../pipes/recortar-texto.pipe';
import { TraducirHtmlPipe } from '../../pipes/traducir-html.pipe';

@Component({
  selector: 'app-noticia-slider-item',
  standalone: true,
  imports: [RouterLink, RecortarTextoPipe, TraducirHtmlPipe],
  templateUrl: './noticia-slider-item.component.html',
  styleUrl: './noticia-slider-item.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NoticiaSliderItemComponent {
  @Input() miNoticia?: INoticia | any;



}
