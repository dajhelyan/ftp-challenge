import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { JsonData } from '../../interfaces/json-data.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';

const DATAMOCK: JsonData[] =[
  {fecha:'2023-05-28',descripcion:'ITF',moneda:'PEN', monto:' -1.7', codigo_unico:'2010221'},
  {fecha:'2023-05-28',descripcion:'ITF',moneda:'PEN', monto:' -1.8', codigo_unico:'2010223'}
]


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})

// function to open dialog

export class TableComponent implements OnChanges {

  constructor(public dialog: MatDialog) {}

  @Input()headers!: string[] | undefined;
  // @Input()tableData!: JsonData[];
  displayedColumns;
  dataSource;

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, data: any): void {
    console.log(data, 'here is the data from table');
    
    this.dialog.open(DialogComponent, {
      data: data,
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnit(){
    this.dataSource = DATAMOCK;
    this.displayedColumns = ['codigo_unico', 'fecha', 'descripcion', 'moneda', 'monto', 'actions']
  }

  ngOnChanges() {
    this.dataSource = DATAMOCK;
    this.displayedColumns = ['codigo_unico', 'fecha', 'descripcion', 'moneda', 'monto', 'actions']
  }

  updateData(e:any){
    console.log(e);
  }
}
