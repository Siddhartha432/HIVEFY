import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, pipe, tap } from 'rxjs';
import { environments } from '../../../environments/environments';
import { usuarios } from '../interfaces/interfaces';

@Injectable({providedIn: 'root'})
export class AuthService {

    private baseUrl:string = environments.baseUrl;
    private user?:usuarios;
    constructor(private http: HttpClient) { }

   get currentUser():usuarios|undefined{
    if(!this.user) return undefined;
    return structuredClone( this.user);
   }
    
   login(user:string, password: string):Observable<usuarios>{
return this.http.get<usuarios>(`${this.baseUrl}/users/1`)
.pipe(
    tap( user =>  this.user = user ),
    tap( user => localStorage.setItem('token', user.id.toString()) ),
 );
  }

  checkAuthentication():Observable<boolean>{
    if(!localStorage.getItem('token')) return of(false);
    const  token = localStorage.getItem('token');
      return this.http.get<usuarios>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        map(user => !!user),
        catchError(err => of(false))
      );
  }

  logout(){
    this.user = undefined;
    localStorage.clear();
  }
    
}