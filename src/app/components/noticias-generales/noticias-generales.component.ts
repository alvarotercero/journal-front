import { Component, inject, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NoticiaCardComponent } from '../noticia-card/noticia-card.component';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-noticias-generales',
  standalone: true,
  imports: [NoticiaCardComponent],
  templateUrl: './noticias-generales.component.html',
  styleUrl: './noticias-generales.component.css'
})
export class NoticiasGeneralesComponent {
  arrNoticiasGenerales: INoticia[] = [];
  noticiasService = inject(NoticiasService)
  @Input() categoria: string = ''
  async ngOnChanges() {
    try {
      if (this.categoria !== 'home') {
        this.arrNoticiasGenerales = await this.noticiasService.getAll('principal', this.categoria, 10)
      }
      else {
        this.arrNoticiasGenerales = await this.noticiasService.getAll('principal', undefined, 10)
      }
    } catch (error) {
      console.log(error);

      this.arrNoticiasGenerales = []
    }

  }
}
