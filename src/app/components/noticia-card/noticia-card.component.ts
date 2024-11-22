import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { RouterLink } from '@angular/router';
import { RecortarTextoPipe } from '../../pipes/recortar-texto.pipe';

type Error = {
  message: string
}

@Component({
  selector: 'app-noticia-card',
  standalone: true,
  imports: [RouterLink, RecortarTextoPipe],
  templateUrl: './noticia-card.component.html',
  styleUrl: './noticia-card.component.css'
})
export class NoticiaCardComponent {
  @Input() miNoticia?: INoticia
  @Input() esNoticiaGeneral: boolean = false;
}
