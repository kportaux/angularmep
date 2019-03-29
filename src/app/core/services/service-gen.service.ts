import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceGenService<T> {
  private isIdentifier = false;
  /**
   *
   * @param httpclient injection lié au module app.module
   * @param router  injection lié à core-rooting.module
   */
  constructor(private httpclient: HttpClient, private router: Router) {}


  getListT(url): Observable<T[]> {
    return this.httpclient.get<T[]>(url);
  }

  getById(id, url): Observable<T> {
    return this.httpclient.get<T>(url + '/' + id);
  }

  canActivate(): boolean {
    return this.isIdentifier;
  }

  /**
   *
   * @param data Donnée <T>
   * @param url  dépendant
   */
  putT(data, url): Observable<any> {

    return this.httpclient.put(url + '/' + data.id,
      data);
  }

  /**
   * Créer un utlisateur
   * @param user
   */
  postT(data, url) {
    this.httpclient.post(url,
      data)
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
        },
        error => {
          console.log('Rrror', error);
        }
      );
  }

  /**
   * Créer un utlisateur
   * @param user
   */
  postT2(data, url): Observable<any> {
    return this.httpclient.post(url,
      data);

  }

  /**
   * Suppression d'un utilisateur
   */
  deleteT(id: number, url): Observable<any> {
    return this.httpclient.delete(url + '/' + id);
  }

  /**
   * Gestion des erreurs
   * @param error
   */

  private handleError(error: HttpErrorResponse | any) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return Observable.throw(
      'Something bad happened; please try again later.');
  }
}
