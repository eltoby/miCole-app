import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { Recorrido } from '../../../entities/recorrido';
import { environment } from '../../../../environments/environment'

@Injectable({
    providedIn: 'root',
  })
export class RecorridosService {
  private serviceUrl = `${environment.apiUrl}/recorridos`;
  
  constructor(private http: HttpClient) { }
  
  getRecorridos(): Observable<Recorrido[]> {
    return this.http.get<Recorrido[]>(this.serviceUrl);
  }
}