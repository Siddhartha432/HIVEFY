import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Banda } from '../interfaces/bandas.interface';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class BandasService {

    private baseUrl:string = environments.baseUrl;
    constructor(private http: HttpClient) { }
    getBandas():Observable<Banda[]>{
        return this.http.get<Banda[]>(`${this.baseUrl}/albums`);
    }

    getAlbumById(id: string): Observable<Banda|undefined>{
        return this.http.get<Banda>(`${this.baseUrl}/albums/${id}`)
        .pipe(catchError(error => of(undefined)));
    }

    getSugestions(query:string):Observable<Banda[]>{
        return this.http.get<Banda[]>(`/albums?q=${query}&_limit=5`);
    }
    
}