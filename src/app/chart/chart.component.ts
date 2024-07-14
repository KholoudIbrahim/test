import { Customers } from './../interfaces/customers';
import { Transactions } from './../interfaces/transactions';
import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CustomerTransactionsDataService } from '../customer-transactions-data.service';
import {Chart,registerables} from 'chart.js'


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit{
  @Input() transactions: Transactions[] = [];
  // @Input() Customers=  [];

  result1!:any[];
  result2:any[]=[];
  final:any=[];

  customer!:Customers[];
  transaction!:Transactions[];

  chart:any=[];
  constructor(private _service:CustomerTransactionsDataService)
  {
    Chart.register(...registerables);
  }


  ngOnInit()
  {
    this._service.getCustomersData().subscribe(res=>{
      this.result1=res;
      console.log(this.result1)

      // this.customer=res.name;
      this.customer=res.map((id:any)=> id.id);
      console.log('customer id',this.customer);
      // console.log('cx id',this.customer);
      this.final = this.result1;
    });
    this._service.getTransactionsData().subscribe(res=>{
      this.result2=res;
      console.log(this.result2)
    this.transaction=this.result2;
    this.transaction=res.map((id:any)=> id.amount);
      console.log('transaction id',this.transaction);
      this.final = this.final.concat(this.result2);
      console.log(this.final)

      this.chart = new Chart('canvas',{
        type: 'line',
        data: {
          labels:this.customer,
          datasets: [{
            label: 'Total Transaction Amount',
            data: this.transaction,
            borderWidth:3,
            fill: false,
            backgroundColor: '#6e9999',
            borderColor:'#3e95cd'
          }]

        }
      })

    });

    // this.final=this.result1+this.result2;


    // this.final = this.result1.concat(this.result2);
  }
}
