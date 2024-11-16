import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-noticia-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './noticia-card.component.html',
  styleUrl: './noticia-card.component.css'
})
export class NoticiaCardComponent {
  @Input() miNoticia?: INoticia
  @Input() esNoticiaGeneral: boolean = false;
  @Input() enRevision: boolean = false;
}
