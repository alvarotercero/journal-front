import { Component, inject } from '@angular/core';
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

  async ngOnInit() {
    this.arrNoticiasGenerales = await this.noticiasService.getAll('principal', 'tecnologia')
  }
}
