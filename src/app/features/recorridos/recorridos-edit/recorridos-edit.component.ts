import { Component, OnInit } from '@angular/core';
import { Recorrido } from 'src/app/entities/recorrido';

@Component({
  selector: 'app-recorridos-edit',
  templateUrl: './recorridos-edit.component.html',
  styleUrls: ['./recorridos-edit.component.scss']
})
export class RecorridosEditComponent implements OnInit {
  recorrido: Recorrido;
  
  constructor() 
  { 
    this.recorrido = new Recorrido(1, "Recorrido", null);
  }

  ngOnInit() {
  }

}
