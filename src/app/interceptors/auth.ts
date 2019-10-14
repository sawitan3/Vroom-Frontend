import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {StorageService} from '../services/storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public storageService: StorageService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!request.url.includes('login') || !request.url.includes('api/password')) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.storageService.getItem('token')}`
                }
            });
        }
        return next.handle(request);
    }
}
