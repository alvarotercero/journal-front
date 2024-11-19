import { Component, inject, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NoticiaCardComponent } from '../noticia-card/noticia-card.component';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-noticias-secundarias',
  standalone: true,
  imports: [NoticiaCardComponent],
  templateUrl: './noticias-secundarias.component.html',
  styleUrl: './noticias-secundarias.component.css'
})
export class NoticiasSecundariasComponent {
  arrNoticiasSecundarias: INoticia[] = [];
  noticiasService = inject(NoticiasService)
  @Input() categoria: string = '';

  async ngOnInit() {
    if (this.categoria) {
      this.arrNoticiasSecundarias = (await this.noticiasService.getAll('secundario', this.categoria)).slice(0, 2)
    }
    else {
      this.arrNoticiasSecundarias = (await this.noticiasService.getAll('secundario')).slice(0, 2)
    }
  }
}
