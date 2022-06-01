import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { RequestCacheEntry } from './models';
import { Logger } from './logger.service';

const log = new Logger('RequestCache');

export abstract class RequestCache {
  abstract get(req: HttpRequest<any>): HttpResponse<any> | undefined;
  abstract put(req: HttpRequest<any>, response: HttpResponse<any>): void;
}

const maxAge = 30000; // maximum cache age (ms)

@Injectable({
  providedIn: 'root',
})
export class RequestCacheWithMap implements RequestCache {
  cache = new Map<string, RequestCacheEntry>();

  constructor() {}

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) return undefined;

    const isExpired = cached.lastRead < Date.now() - maxAge;
    const expired = isExpired ? 'expired ' : '';
    log.debug(`Found ${expired}cached response for "${url}".`);
    return isExpired ? undefined : cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    log.debug(`Caching response from "${url}".`);

    const newEntry = { url, response, lastRead: Date.now() };
    this.cache.set(url, newEntry);

    // remove expired cache entries
    const expired = Date.now() - maxAge;
    this.cache.forEach((entry) => {
      if (entry.lastRead < expired) this.cache.delete(entry.url);
    });

    log.debug(`Cache size: ${this.cache.size}.`);
  }
}
