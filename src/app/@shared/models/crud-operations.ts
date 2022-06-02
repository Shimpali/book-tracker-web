import { Observable } from 'rxjs';
import { APIResponse } from './api-response';

export interface CrudOperations<T, ID> {
  get(): Observable<APIResponse>;
  getById(id: ID, endpoint?: string): Observable<APIResponse>;
  save(data: T, endpoint?: string): Observable<APIResponse>;
  updateById(id: ID, updates: Partial<T>, endpoint?: string): Observable<APIResponse>;
  delete(id: ID, endpoint?: string): Observable<APIResponse>;
}
