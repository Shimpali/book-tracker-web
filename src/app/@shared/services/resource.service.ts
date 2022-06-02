import { HttpClient, HttpParams } from '@angular/common/http';
import { isNull, omitBy } from 'lodash';
import { Observable } from 'rxjs';

import { APIResponse, CrudOperations } from '../models';

/**
 * A base service to handle HTTP methods using HttpClient.
 */
export abstract class ResourceService<T, ID> implements CrudOperations<T, ID> {
  constructor(protected http: HttpClient, protected baseUrl: string) {}

  setParams(paramsObject: any): HttpParams {
    return new HttpParams({
      fromObject: {
        ...omitBy(paramsObject, isNull),
      },
    });
  }

  /**
   * GET list of data with optional params.
   *
   * @param params HttpParams
   * @returns An observable with array of data objects
   */
  get(endpoint?: string, paramsObject?: unknown): Observable<APIResponse> {
    const url = endpoint ? `${this.baseUrl}/${endpoint}` : this.baseUrl;
    const params = this.setParams(paramsObject);
    return this.http.get<APIResponse>(url, { params });
  }

  /**
   * GET data by id
   *
   * @param id Object Id to retrieve data
   * @returns An observable with data object
   */
  getById(id: ID, endpoint?: string): Observable<APIResponse> {
    const url = endpoint ? `${this.baseUrl}/${endpoint}` : this.baseUrl;
    return this.http.get<APIResponse>(`${url}/${id}`);
  }

  getObject(endpoint?: string): Observable<APIResponse> {
    const url = endpoint ? `${this.baseUrl}/${endpoint}` : this.baseUrl;
    return this.http.get<APIResponse>(url);
  }

  /**
   * POST a new object and Store it in the database.
   *
   * @param data POST method body
   * @returns An observable with the newly created data object
   */
  save(data: T, endpoint?: string): Observable<APIResponse> {
    const url = endpoint ? `${this.baseUrl}/${endpoint}` : this.baseUrl;
    return this.http.post<APIResponse>(url, data);
  }

  /**
   * PUT method to update an existing object.
   *
   * @param updates An object consisting few or all fields in the data model to be updated
   * @returns An observable with the updated data object
   */
  update(updates: Partial<T>, endpoint?: string): Observable<APIResponse> {
    const url = endpoint ? `${this.baseUrl}/${endpoint}` : this.baseUrl;
    return this.http.patch<APIResponse>(url, { ...updates });
  }

  updateById(id: ID, updates: Partial<T>, endpoint?: string): Observable<APIResponse> {
    const url = endpoint ? `${this.baseUrl}/${id}/${endpoint}` : `${this.baseUrl}/${id}`;
    return this.http.patch<APIResponse>(url, { ...updates });
  }

  /**
   * DELETE data from DB with id
   *
   * @param id Id of the object to be deleted
   * @returns An observable with a message confirming the deletion
   */
  delete(id: ID, endpoint?: string): Observable<APIResponse> {
    const url = endpoint ? `${this.baseUrl}/${endpoint}` : this.baseUrl;
    return this.http.delete<APIResponse>(`${url}/${id}`);
  }
}
