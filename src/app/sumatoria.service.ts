import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Sumatoria {
  id: number;
  numero1: number;
  numero2: number;
  resultado: number;
}

@Injectable({
  providedIn: 'root'
})
export class SumatoriaService {
  private apiUrl = 'http://localhost:3000/sumatoria';

  constructor(private http: HttpClient) {}

  createSumatoria(numero1: number, numero2: number): Observable<Sumatoria> {
    return this.http.post<Sumatoria>(this.apiUrl, { numero1, numero2 });
  }

  getSumatorias(): Observable<Sumatoria[]> {
    return this.http.get<Sumatoria[]>(this.apiUrl);
  }
  saveSumatoria(sumatoria: Partial<Sumatoria>): Observable<Sumatoria> {
    return this.http.post<Sumatoria>(this.apiUrl, sumatoria);
  }
}
