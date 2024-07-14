import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CustomerTransactionsDataService } from '../customer-transactions-data.service';
import {Customers} from '../interfaces/customers'
import {Transactions} from '../interfaces/transactions'
import {MatTableModule} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
// interfaces
// ***** Arrays of type interface to get the data returning from service *****
  customersData:Customers[]=[];
  TransactionsData:Transactions[]=[];

// *** error msg handling ***
  errMessage:string = '';

// ### data source for table
  // dataSource:any;

  // constructor(private _CustomerTransactionsDataService:CustomerTransactionsDataService)
  // {
    
  // }

  ngOnInit(): void 
  {
    // this.fetchCustomer();
    // this._CustomerTransactionsDataService.getCustomersData().subscribe(data=>{})
  }



  constructor(private _CustomerTransactionsDataService:CustomerTransactionsDataService)
  {

  //   // *************************** Get Users Data from service ***************************
    _CustomerTransactionsDataService.getCustomersData().subscribe(
      {
        next: (data)=> { 
          this.customersData = data; 
          // this.dataSource = new MatTableDataSource(this.customersData);
          console.log(data) },
        error: (err)=> this.errMessage = err,
        complete: ()=>console.log('Customer Data Complete')
      }
    );

    // *************************** Get Transactions Data from service ***************************

    _CustomerTransactionsDataService.getTransactionsData().subscribe(
      {
        next: (data)=> { this.TransactionsData = data; console.log(data) },
        error: (err)=> this.errMessage = err,
        complete: ()=>console.log('Transaction Data Complete')
      }
    );

  }

  // ngOnInit(): void {}
 
  // dataSource:Customers[] = this.customersData;
  displayedColumns: string[] = ['id'];
  // displayedColumns: string[] = ['id', 'name', 'transaction_id','date','amount'];
  // dataSource = new MatTableDataSource<Customers>(this.customersData);
  // dataSorce = new MatTableDataSource<Customers>(ELEMENT_DATA);
}
