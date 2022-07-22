import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private TokenService: TokenService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // let token =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYjZmMWZlNTQtMDEyNi00NDRhLTg3ZjAtZmFiNmE4ZmI0N2RhIiwianRpIjoiYTAxMmZkMDktNGRmMy00MjgwLWI4MzgtMzYwZTRkNjhhMTQ1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiRHJpdmVyIiwiZXhwIjoxNzUxMzYzMDU4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjYxOTU1IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIn0.6XXqiWHlOdx062a9Z2jCC2mJemcSOvdugwoqhUiIbEc';
    // let data = req.clone({
    //   setHeaders: { Authorization: 'bearer'+ localStorage.getItem(token)},
    // });

    const token = this.TokenService.getAuthToken();
    if (token) {
      // If we have a token, we set it to the header
      req = req.clone({
        setHeaders: { Authorization: ` Bearer  ${token}` },
      });
      console.log('token from inceptor', token);
    }

    return next.handle(req).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // redirect user to the logout page
          }
        }
        return throwError(err);
      })
    )
  }
  // const modifiedReq = req.clone({
  //   withCredentials: true,
  // });
  // console.log('req', req);

  // return next.handle(modifiedReq).pipe(
  //   filter((val) => val.type === HttpEventType.Sent),
  //   tap((val) => {
  //     console.log('sent the request');

  //     if (val.type === HttpEventType.Sent) {
  //       console.log('request was sent');
  //     }
  //     if (val.type === HttpEventType.Response) {
  //       console.log('get responce from api ', val);
  //     }
  //     console.log('val', val);
  //   })
  // );
}

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const { data } = this.TokenService.userValue;
//     if (data) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${data}`,
//         },
//       });
//     }
//     return next.handle(request).pipe(
//       catchError((err) => {
//         if (err.status === 401) {
//           this.TokenService.logout();
//         }
//         const error = err.error.message || err.statusText;
//         return throwError(error);
//       })
//     );
//   }
