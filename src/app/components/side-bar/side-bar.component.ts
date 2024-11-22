import { Component, inject } from '@angular/core';
import { ICategoria } from '../../interfaces/icategoria.interface';
import { CategoriasService } from '../../services/categorias.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';
import { FormularioSuscripcionComponent } from "../formulario-suscripcion/formulario-suscripcion.component";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormularioSuscripcionComponent, SearchComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  categoriasService = inject(CategoriasService);
  arrCategorias: ICategoria[] = []
  token: string | null = ''
  sideBarService = inject(SidebarService)
  isSidebarOpen = false;

  async ngOnInit() {
    this.arrCategorias = await this.categoriasService.getAll();

    this.sideBarService.isSidebarOpen$.subscribe((isOpen) => {
      this.isSidebarOpen = isOpen
    })
  }
  ngDoCheck() {
    this.token = localStorage.getItem('token');
  }
  closeSidebar() {
    this.sideBarService.closeSidebar();
  }
}
