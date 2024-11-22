import { Component, inject } from '@angular/core';
import { ICategoria } from '../../interfaces/icategoria.interface';
import { CategoriasService } from '../../services/categorias.service';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  categoriasService = inject(CategoriasService);
  arrCategorias: ICategoria[] = []
  token = localStorage.getItem('token')
  sideBarService = inject(SidebarService)
  isSidebarOpen = false;

  async ngOnInit() {
    this.arrCategorias = await this.categoriasService.getAll();

    this.sideBarService.isSidebarOpen$.subscribe((isOpen) => {
      this.isSidebarOpen = isOpen
    })
  }

  closeSidebar() {
    this.sideBarService.closeSidebar();
  }
}
