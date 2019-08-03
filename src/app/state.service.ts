import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private tituloPrincipalSource = new Subject<string>();

  public tituloPrincipal$ = this.tituloPrincipalSource.asObservable();

  constructor() { }

  tituloPrincipalUpdate(titulo: string) {
    this.tituloPrincipalSource.next(titulo);
  }
}
