import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CategoriasService } from '../services/categorias.service';

export const categoriaGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const categoriasService = inject(CategoriasService);
  const arrCategorias = (await categoriasService.getAll()).map(categoria => categoria.slug)
  const categoria = route.paramMap.get('categoria')
  if (!arrCategorias.includes(categoria || '') && categoria !== 'home') {
    router.navigate(['/noticias', 'home'])
    return false
  }
  return true;
};
