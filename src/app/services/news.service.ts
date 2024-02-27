import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { News } from '../interfaces/news';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private newsAPI = environment.API_URL; // URL to web api
  newsPull: News[] = [];

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<any>(this.newsAPI).pipe(
      map((n) => n.articles),
      catchError(this.handleError<News[]>('get News Data', []))
    );
  }

  setData(data: News[]): void {
    this.newsPull = data;
  }

  getData(): News[] {
    return this.newsPull;
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
