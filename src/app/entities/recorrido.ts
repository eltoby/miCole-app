import { Parada } from './parada'

export class Recorrido {
  constructor(
    public id: number,
    public nombre: string,
    public paradas: Array<Parada>    
  ) {}
}
