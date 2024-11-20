import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (!localStorage.getItem('token')) {
    //aqui podrias decodificar el token con JWT y extraer el id usuario , role.
    router.navigate(['/login']);
    return false;
  }

  return true;
};
