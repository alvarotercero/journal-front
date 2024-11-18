import { Component, inject } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NoticiaSliderItemComponent } from '../noticia-slider-item/noticia-slider-item.component';
import { NoticiasService } from '../../services/noticias.service';


@Component({
  selector: 'app-destacados',
  standalone: true,
  imports: [NoticiaSliderItemComponent],
  templateUrl: './destacados.component.html',
  styleUrl: './destacados.component.css'
})
export class DestacadosComponent {
  arrNoticiasDestacadas: INoticia[] = [];
  noticiasService = inject(NoticiasService)

  async ngOnInit() {
    this.arrNoticiasDestacadas = await this.noticiasService.getAll('destacado', 'economia')
  }

}
