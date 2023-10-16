import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor(private spinner: NgxSpinnerService) {
    console.log('running...');
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinner.show();
    console.log('running...');
    return next.handle(req).pipe(finalize(() => this.spinner.hide()));
  }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class LoaderService {
//   private loading: boolean = false;

//   constructor() {}

//   setLoading(loading: boolean) {
//     this.loading = loading;
//   }

//   getLoading(): boolean {
//     return this.loading;
//   }
// }
