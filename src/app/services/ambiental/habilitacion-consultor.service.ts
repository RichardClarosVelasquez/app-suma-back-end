import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { HabilitacionConsultorComponent } from 'app/routes/ambiental/habilitacion-consultor/habilitacion-consultor.component';
// import { YourEntity } from '../models/your-entity.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private apiUrl = 'http://localhost:3000/habilitacion-consultor';
  // constructor(private http: HttpClient) { }
  // getAll(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
  private apiUrl = 'http://localhost:3000/habilitacion-consultor/select-columns'; // Endpoint del método POST
  constructor(private http: HttpClient) {}
  getSelectedColumns(): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl, {}); // El segundo argumento puede ser el body de la petición
  }
}
