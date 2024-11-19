import { Component, inject, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { CategoriasService } from '../../services/categorias.service';
import { ICategoria } from '../../interfaces/icategoria.interface';

type Error = {
  message: string
}

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
