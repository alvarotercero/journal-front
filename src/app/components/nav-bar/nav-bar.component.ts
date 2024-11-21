import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ICategoria } from '../../interfaces/icategoria.interface';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent {
  arrCategorias: ICategoria[] = [];
  categoriasService = inject(CategoriasService)
  token: string | null = ''


  router = inject(Router);


  async ngOnInit() {
    this.arrCategorias = await this.categoriasService.getAll();
  }

  // Docheck para que se actualice el token cada vez que se renderiza el componente
  ngDoCheck() {
    this.token = localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
