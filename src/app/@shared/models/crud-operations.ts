import { Observable } from 'rxjs';

export interface CrudOperations<T, ID> {
  get(id: ID): Observable<T>;
  getAll(): Observable<T[]>;
  save(data: T): Observable<T>;
  update(id: ID, updates: Partial<T>): Observable<T>;
  delete(id: ID): Observable<string>;
}
