import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ICategoria } from '../../interfaces/icategoria.interface';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  arrCategorias: ICategoria[] = [];
  categoriasService = inject(CategoriasService)

  async ngOnInit() {
    this.arrCategorias = await this.categoriasService.getAll();
    // console.log(this.arrCategorias);

  }
}
