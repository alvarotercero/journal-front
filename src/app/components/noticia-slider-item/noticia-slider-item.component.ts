import { Component, inject, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { RouterLink } from '@angular/router';
import { ICategoria } from '../../interfaces/icategoria.interface';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-noticia-slider-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './noticia-slider-item.component.html',
  styleUrl: './noticia-slider-item.component.css'
})
export class NoticiaSliderItemComponent {
  @Input() miNoticia?: INoticia;
  categoria?: ICategoria;
  categoriasService = inject(CategoriasService)

  async ngOnInit() {
    try {
      this.categoria = await this.categoriasService.getById(this.miNoticia?.categoria_id)
    } catch (error) {
      console.log(error);
    }

  }
}
