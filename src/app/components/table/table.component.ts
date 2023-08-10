import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { JsonData } from '../../interfaces/json-data.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})

export class TableComponent implements OnChanges {

  @Input()headers!: string[] | undefined;
  @Input()tableData!: JsonData[];
  displayedColumns;
  dataSource;

  ngOnChanges() {
    this.dataSource = this.tableData;
    this.displayedColumns = ['id', 'fecha', 'descripcion', 'moneda', 'monto', 'codigo_unico', 'actions']
  }

  updateData(e:any){
    console.log(e);
  }
}
