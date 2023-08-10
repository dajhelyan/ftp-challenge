import { Component, Input } from '@angular/core';
// import { CSVRecord } from 'src/app/models/file.model';

// interface tableElement {
//   fecha: String;
//   descripcion: String;
//   moneda: String;
//   monto: any;
//   codigo_unico: String
// }

const currencyData = [
  {'fecha':'2023-05-28','venta':3.675,'compra':3.671},
  {'fecha':'2023-05-29','venta':3.678,'compra':3.674},
  {'fecha':'2023-05-30','venta':3.68,'compra':3.667}
]

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {
  @Input() file!: File;
  tableData: any;
  headers: any;
  // console.log();
  fsUploaded(eve: { target: any; }) {
    let input = eve.target
    let fileImported = input.files[0]

    const reader = new FileReader()
    reader.readAsText(fileImported)

    reader.onload = () => {
      let csvData = reader.result;
      let rowText = (<string>csvData).split(/\r\n|\n/);
      let jsonData: any[] = []
      // convert data to array
      const arrStrings = rowText.map((ele) => {
        return ele.split(",", -1)
      })
      this.headers = arrStrings[0]
      

      // get key and values from arr
      const [keys, ...values ] = arrStrings;
      // convert csv data to json 
      jsonData = values.map((arr) => {
        console.log(arr);
        
        return arr.reduce((acc, cur, i) => { 
          const obj = {...acc, [keys[i]]: cur}
          return obj
        }, {})
      })
      // removing empthy element
      // jsonData.pop()

      // change currency per day


      const usd = jsonData.forEach((ele:any) => {
        
        if (ele.moneda === 'USD') {
          // get currency exchange per day
          const pricePerDay = currencyData.find((eleData:any) => {
            if(eleData.fecha === ele.fecha) return eleData
           })
           console.log(pricePerDay?.venta);

           if (pricePerDay) {
            ele.moneda = 'PEN'
            ele.monto = (parseInt(ele.monto) * pricePerDay.venta).toFixed(2);
            return ele
           }
          // console.log(pricePerDay)
        }
        return ele
      })
      console.log(usd);
      return this.tableData = jsonData
    }
  };

  // updateData((e) {
  //   return e
  // )}
}
