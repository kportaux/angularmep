import {Injectable} from '@angular/core';
import {Login} from '../model/loginmodel';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';

/**
 * Service utilisant un BehaviorSubject pour gérer la connexion anonyme
 * Déclenché par la méthode : login
 */

const ANONYMOUS_USER = {
  isAnonymous: true,
  userName: 'ANONYME'
} as Login;

const urlLogin = environment.urlAPI + 'login';

@Injectable({
  providedIn: 'root'
})
export class Loginservice {

  /**
   * Gestion de l'authentification
   */
  protected authenticatedUser: BehaviorSubject<Login> = new BehaviorSubject<Login>(ANONYMOUS_USER);

  constructor(private httpclient: HttpClient, private router: Router) {}

  /**
   *
   * @param userName Login de l'utilisateur
   * @param password Mot de passe
   * @returns Un obserbale pour être souscrit dans le component Login.component.ts
   */
  public login(userName: string, password: string): Observable<Login> {
    const service = this;
    const params = new HttpParams().set('userName', userName).set('userMDP', password);
    console.log('login');
    return service.httpclient.get<Login[]>(urlLogin,
      {params}
    ).pipe(

      map(userJson => {
        if (userJson.length === 1) {
          const newLogin = userJson[0];
          service.authenticatedUser.next(newLogin);
          this.router.navigate(['/listlogins']);
          return newLogin;
        } else {
          service.authenticatedUser.next(ANONYMOUS_USER);
          this.router.navigate(['/login']);
          return null;
        }
      })
    );
  }

  public loginfilter(userName: string, password: string): void {
    const service = this;
    service.httpclient.get<Login[]>(urlLogin).pipe(
      map(
        (logins: Login[]) => logins.filter(
          (login: Login) => {
            if (login.userName === userName && login.userMDP === password) {
              return true;
            } else {
              return false;
            }
          })
      )).subscribe(
      (logins: Login[]) => {
        if (logins.length === 1) {
          service.authenticatedUser.next(logins[0]);
          this.router.navigate(['/listlogins']);
        } else {
          service.authenticatedUser.next(ANONYMOUS_USER);
          this.router.navigate(['/login']);

        }
      }
    );
  }

  /**
   * Déconnecte l'utilisateur logué
   */
  public logout(): Observable<Response> {
    const service = this;
    console.log('accés logout');
    return service.httpclient.get(urlLogin)
      .pipe(
        map((response: Response) => {
          service.authenticatedUser.next(ANONYMOUS_USER);
          this.router.navigate(['/login']);
          return response;
        })
      );
  }

  /**
   * Récupére l'utilsiteur connecté
   */
  public getAuthenticatedUser(): Observable<Login> {
    return this.authenticatedUser;
  }

  /**
   * Active ou non selon l'utilisateur l'accés à l'app
   */
  canActivate(): boolean {
    let btrouve = false;
    this.getAuthenticatedUser().subscribe((data) => btrouve = data.isAnonymous);
    return (!btrouve);
  }

}
