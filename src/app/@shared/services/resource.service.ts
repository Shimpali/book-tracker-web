import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CrudOperations } from '../models';

/**
 * A base service to handle HTTP methods using HttpClient.
 */
@Injectable({
  providedIn: 'root',
})
export abstract class ResourceService<T, ID> implements CrudOperations<T, ID> {
  constructor(private http: HttpClient, @Inject(String) private endpoint: string) {
    console.log(this.http);
    console.log(this.endpoint);
  }

  /**
   * GET list of data with optional params.
   *
   * @param params HttpParams
   * @returns An observable with array of data objects
   */
  getAll(params?: HttpParams): Observable<T[]> {
    return this.http.get<T[]>(this.endpoint, { params });
  }

  /**
   * GET data by id
   *
   * @param id Object Id to retrieve data
   * @returns An observable with data object
   */
  get(id: ID): Observable<T> {
    return this.http.get<T>(`${this.endpoint}/${id}`);
  }

  /**
   * POST a new object and Store it in the database.
   *
   * @param data POST method body
   * @returns An observable with the newly created data object
   */
  save(data: T): Observable<T> {
    return this.http.post<T>(this.endpoint, data);
  }

  /**
   * PUT method to update an existing object.
   *
   * @param updates An object consisting few or all fields in the data model to be updated
   * @returns An observable with the updated data object
   */
  update(id: ID, updates: Partial<T>): Observable<T> {
    return this.http.put<T>(`${this.endpoint}/${id}`, { ...updates });
  }

  /**
   * DELETE data from DB with id
   *
   * @param id Id of the object to be deleted
   * @returns An observable with a message confirming the deletion
   */
  delete(id: ID): Observable<string> {
    return this.http.delete<string>(`${this.endpoint}/${id}`);
  }
}
