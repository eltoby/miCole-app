import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { RecorridosComponent } from './recorridos/recorridos.component';
import { RecorridosListComponent } from './recorridos-list/recorridos-list.component';
import { RecorridosEditComponent } from './recorridos-edit/recorridos-edit.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
        { path: 'recorridos' , component: RecorridosComponent},
    ])
  ],
  declarations: [
    RecorridosComponent,
    RecorridosListComponent,
    RecorridosEditComponent
  ]
})
export class RecorridosModule { }
