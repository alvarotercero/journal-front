import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { RecortarTextoPipe } from '../../pipes/recortar-texto.pipe';

@Component({
  selector: 'app-noticia-edition-card',
  standalone: true,
  imports: [RouterLink, UpperCasePipe, RecortarTextoPipe],
  templateUrl: './noticia-edition-card.component.html',
  styleUrl: './noticia-edition-card.component.css'
})

export class NoticiaEditionCardComponent {

  @Input() miNoticia?: INoticia;

}
