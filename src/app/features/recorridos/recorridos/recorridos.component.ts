import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../state.service';

@Component({
  selector: 'app-recorridos',
  templateUrl: './recorridos.component.html',
  styleUrls: ['./recorridos.component.scss']
})
export class RecorridosComponent implements OnInit {

  constructor(private stateSrv: StateService) { }

  ngOnInit() {
    this.stateSrv.tituloPrincipalUpdate('Recorridos');
  }

}
