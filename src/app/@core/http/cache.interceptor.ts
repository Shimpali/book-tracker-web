import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpResponse, HttpInterceptor, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { RequestCache } from '../request-cache.service';

/**
 * If request is cacheable and
 * response is in cache return the cached response as observable.
 *
 * If not in cache or not cacheable,
 * pass request through to next()
 */
@Injectable({
  providedIn: 'root',
})
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCache) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // continue if not cacheable.
    if (!isCacheable(req)) {
      return next.handle(req);
    }

    const cachedResponse = this.cache.get(req);

    // cache-or-fetch
    return cachedResponse ? of(cachedResponse) : sendRequest(req, next, this.cache);
  }
}

/** Is this request cacheable? */
const isCacheable = (req: HttpRequest<any>) => req.method === 'GET';

/**
 * Get server response observable by sending request to `next()`.
 * Will add the response to the cache on the way out.
 */
const sendRequest = (req: HttpRequest<any>, next: HttpHandler, cache: RequestCache): Observable<HttpEvent<any>> =>
  next.handle(req).pipe(
    tap((event) => {
      // There may be other events besides the response.
      if (event instanceof HttpResponse) {
        cache.put(req, event); // Update the cache.
      }
    })
  );
