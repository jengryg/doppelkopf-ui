import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, map, Observable, of, tap} from 'rxjs';
import {User} from './state/auth.models';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  whoAmI(): Observable<User> {
    return this.http.get<User>(`${environment.backendUrl}/v1/auth/status`, {
      withCredentials: true
    }).pipe(
      tap(response => console.log(response)),
    )
  }

  login(username: string, password: string) {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post(`${environment.backendUrl}/v1/auth/login`, body, {
      withCredentials: true,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      observe: 'response'
    });
  }

  register(username: string, password: string, passwordConfirm: string) {
    return this.http.post<User>(`${environment.backendUrl}/v1/users`, {
      username, password, passwordConfirm
    });
  }

  logout(): Observable<boolean> {
    return this.http.get(`${environment.backendUrl}/v1/auth/logout`, {
      withCredentials: true
    }).pipe(
      tap(response => console.log(response)),
      map(() => true),
      catchError(() => of(false))
    )
  }
}
