import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseUrl: string = environments.baseURL;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    console.log(this.http.get<Hero[]>(`${ this.baseUrl}/heroes`))
    return this.http.get<Hero[]>(`${ this.baseUrl}/heroes`)

  }

  getHeroById( id: string): Observable<Hero|undefined> {
    return this.http.get<Hero>(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        catchError( error => of(undefined) ) //of en realidad es un observable. Esto se hace así porque si solo retorno undefined, el sistema espera un Observable
      )
  }
}
