import { HttpInterceptorFn } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token') || "";

  const cloneReq = req.clone({
    setHeaders: {
      "Content-Type": "application/json",
      "Authorization": token
    }
  })

  return next(cloneReq);
};
