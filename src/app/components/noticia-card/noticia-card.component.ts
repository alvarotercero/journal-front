import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { RouterLink } from '@angular/router';
import { RecortarTextoPipe } from '../../pipes/recortar-texto.pipe';
import { TraducirHtmlPipe } from '../../pipes/traducir-html.pipe';

type Error = {
  message: string
}

@Component({
  selector: 'app-noticia-card',
  standalone: true,
  imports: [RouterLink, RecortarTextoPipe, TraducirHtmlPipe],
  templateUrl: './noticia-card.component.html',
  styleUrl: './noticia-card.component.css'
})
export class NoticiaCardComponent {
  @Input() miNoticia?: INoticia | any;
  @Input() esNoticiaGeneral: boolean = false;
}
