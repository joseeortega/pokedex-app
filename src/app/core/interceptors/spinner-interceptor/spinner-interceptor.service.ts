import { Injectable } from '@angular/core';
import { HttpRequest, HttpEvent, HttpHandler, HttpHeaders, HttpResponse, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, finalize } from 'rxjs/operators';
import { SpinnerService } from 'src/app/shared/services/spinner/spinner.service';
const NO_SPINNER_LOADING_HEADER = 'NO_LOADER';

@Injectable({
  providedIn: 'root'
})
export class SpinnerInterceptorService implements HttpInterceptor {

  requests: HttpRequest<any>[] = [];

  constructor(private spinnerService: SpinnerService) { }

  removeRequest(req: HttpRequest<any>): void {
    const i = this.requests.indexOf(req);
    this.requests.splice(i, 1);
    this.spinnerService.isLoading.next(this.requests.length > 0);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.has(NO_SPINNER_LOADING_HEADER)) {
      req = this.clearNoSpinnerHeader(req);
      return next.handle(req);
    } else {
      this.requests.push(req);
      this.spinnerService.isLoading.next(true);

      return next
        .handle(req)
        .pipe(
          filter((event) => event instanceof HttpResponse),
          finalize(() => this.removeRequest(req))
        );
    }
  }

  private clearNoSpinnerHeader(req: HttpRequest<any>): HttpRequest<any> {
    let cloneHttpHeaders: HttpHeaders = new HttpHeaders();
    req.headers.keys().forEach((key: string) => {
      if (key !== NO_SPINNER_LOADING_HEADER) {
        cloneHttpHeaders = cloneHttpHeaders.append(key, req.headers.get(key));
      }
    });
    const reqMod = req.clone({
      headers: cloneHttpHeaders
    });
    return reqMod;
  }

}
