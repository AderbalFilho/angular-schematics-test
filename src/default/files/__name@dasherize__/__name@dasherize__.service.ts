import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({ providedIn: 'root' })
export class <%= classify(name) %>Service {
  private <%= name %>sUrl = 'api/<%= name %>s';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET <%= classify(name) %>s from the server */
  get<%= classify(name) %>s(): Observable<any> {
    return this.http.get<any>(this.<%= name %>sUrl)
      .pipe(
        catchError(this.handleError('get<%= name %>s', []))
      );
  }

  /** GET <%= name %> by id. Will 404 if id not found */
  get<%= classify(name) %>(id: number): Observable<any> {
    const url = `${this.<%= name %>sUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError<any>(`get<%= classify(name) %> id=${id}`))
    );
  }

  /* GET <%= classify(name) %>s whose name contains search term */
  search<%= classify(name) %>s(term: string): Observable<any> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<any>(`${this.<%= name %>sUrl}/?name=${term}`).pipe(
      catchError(this.handleError<any>('search<%= classify(name) %>s', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new <%= name %> to the server */
  add<%= classify(name) %>(<%= name %>): Observable<any> {
    return this.http.post<any>(this.<%= name %>sUrl, <%= name %>, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      catchError(this.handleError<any>('add<%= classify(name) %>'))
    );
  }

  /** DELETE: delete the <%= name %> from the server */
  delete<%= classify(name) %>(<%= name %>: any | number): Observable<any> {
    const id = typeof <%= name %> === 'number' ? <%= name %> : <%= name %>.id;
    const url = `${this.<%= name %>sUrl}/${id}`;

    return this.http.delete<any>(url, httpOptions).pipe(
      catchError(this.handleError<any>('delete<%= classify(name) %>'))
    );
  }

  /** PUT: update the <%= name %> on the server */
  update<%= classify(name) %>(<%= name %>): Observable<any> {
    return this.http.put(this.<%= name %>sUrl, <%= name %>, httpOptions).pipe(
      catchError(this.handleError<any>('update<%= classify(name) %>'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
