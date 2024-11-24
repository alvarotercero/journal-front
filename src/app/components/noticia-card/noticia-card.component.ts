import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { Router, RouterLink } from '@angular/router';
import { RecortarTextoPipe } from '../../pipes/recortar-texto.pipe';
import { TraducirHtmlPipe } from '../../pipes/traducir-html.pipe';

type Error = {
  message: string
}

@Component({
  selector: 'app-noticia-card',
  standalone: true,
  imports: [RecortarTextoPipe, TraducirHtmlPipe, RouterLink],
  templateUrl: './noticia-card.component.html',
  styleUrl: './noticia-card.component.css'
})
export class NoticiaCardComponent {
  @Input() miNoticia?: INoticia | any;
  @Input() esNoticiaGeneral: boolean = false;

  constructor(private router: Router) { }

  async onNoticiaClick(event: MouseEvent) {
    event.preventDefault();
    const element = (event.currentTarget as HTMLElement);
    element.classList.add('clicked');

    // Wait for animation to complete before navigating
    await new Promise(resolve => setTimeout(resolve, 500));

    this.router.navigate(['/noticias', this.miNoticia?.slug_cat, this.miNoticia?.slug]);
  }
}
