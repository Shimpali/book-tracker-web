import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';
import { CacheInterceptor } from './http/cache.interceptor';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';
import { RequestCache, RequestCacheWithMap } from './request-cache.service';

import { RouteReusableStrategy } from './route-reusable-strategy';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [],
  providers: [
    { provide: RequestCache, useClass: RequestCacheWithMap },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
  ],
})
export class CoreModule {}
