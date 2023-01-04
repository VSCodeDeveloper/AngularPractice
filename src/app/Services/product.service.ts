import { Injectable } from '@angular/core';
import { IProduct } from '../products/products';
import { catchError, Observable, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private URL: string = 'https://localhost:44307/WeatherForecast';
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.URL).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.HandleError)
    );
  }

  private HandleError(err: HttpErrorResponse): Observable<IProduct[]> {
    return err.error;
  }
}
