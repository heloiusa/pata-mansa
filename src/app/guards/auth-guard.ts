import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);

  if (authService.estaLogado()) {
    return true;
  } else {
    // Se não estiver logado, manda de volta para o login
    router.navigate(['./login']);
    return false;
  }
};
