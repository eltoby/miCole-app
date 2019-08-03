import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { RecorridosListDataSource } from './recorridos-list-datasource';
import { RecorridosService } from '../recorridos.api/recorridos.service';

@Component({
  selector: 'app-recorridos-list',
  templateUrl: './recorridos-list.component.html',
  styleUrls: ['./recorridos-list.component.css']
})
export class RecorridosListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource: RecorridosListDataSource;

  constructor(private service: RecorridosService)
  {}
  
  displayedColumns = ['id', 'nombre', 'editar'];

  ngOnInit() {
    this.dataSource = new RecorridosListDataSource(this.sort, this.service);
  }
}
