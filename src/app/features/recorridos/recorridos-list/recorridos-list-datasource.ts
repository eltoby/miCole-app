import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Recorrido } from '../../../entities/recorrido';
import { RecorridosService } from '../recorridos.api/recorridos.service'

// const EXAMPLE_DATA: Recorrido[] = [
//   {id: 1, nombre: 'Casa > Trabajo'},
//   {id: 2, nombre: 'Trabajo > Casa'}
// ];

export class RecorridosListDataSource extends DataSource<Recorrido> {
  // data: Recorrido[] = EXAMPLE_DATA;

  constructor(private sort: MatSort, private service: RecorridosService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Recorrido[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    let data = this.service.getRecorridos();
    return data;
    // const dataMutations = [
    //   data,
    //   this.sort.sortChange
    // ];

    // return merge(...dataMutations).pipe(map(() => {
    //   return this.getSortedData([...data]);
    // }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  private getSortedData(data: Recorrido[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nombre': return compare(a.nombre, b.nombre, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
