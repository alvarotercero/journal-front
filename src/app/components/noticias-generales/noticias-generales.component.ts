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
    console.log(this.categoria);
    if (this.categoria !== 'home') {
      this.arrNoticiasGenerales = (await this.noticiasService.getAll('principal', this.categoria)).slice(0, 4)
    }
    else {
      this.arrNoticiasGenerales = (await this.noticiasService.getAll('principal')).slice(0, 4)
    }

  }
}
