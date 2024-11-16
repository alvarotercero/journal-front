import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-noticia-card',
  standalone: true,
  imports: [],
  templateUrl: './noticia-card.component.html',
  styleUrl: './noticia-card.component.css'
})
export class NoticiaCardComponent {
  @Input() miNoticia?: INoticia
  @Input() esNoticiaGeneral: boolean = false;
}
