import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerTransactionsDataService } from '../customer-transactions-data.service';
import { Customers } from '../interfaces/customers';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  customerList!:Customers[];
  dataSource:any;
  displayedColumns:string[]=['id','name'];

  constructor(private _service:CustomerTransactionsDataService)
  {
    this._service.getCustomersData().subscribe(res=>{
      this.customerList=res;
      this.dataSource = new MatTableDataSource<Customers>(this.customerList);
    });
  }


}
