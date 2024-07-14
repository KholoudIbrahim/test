import { Component,OnInit,ViewChild } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CustomerTransactionsDataService } from '../customer-transactions-data.service';
import {Customers} from '../interfaces/customers'
import {Transactions} from '../interfaces/transactions'

import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  
})
export class GraphComponent implements OnInit {
  customers: Customers[] = [];
  transactions: Transactions[] = [];

  searchedCx: Customers[] = [];
  cxSelectedTransaction: Transactions[] = [];

  searchInput:string=''

  result1!:any[];
  result2!:any[];
  final!:any[];


  customerTransactionTotal: { [key: string]: number } = {};
  customerTransactionDate: { [key: string]: string } = {};
  
  constructor(
    private _CustomerTransactionsDataService:CustomerTransactionsDataService
  ) { }

  ngOnInit(): void {
    this._CustomerTransactionsDataService.getCustomersData().subscribe(data => {
      this.customers = data;
      this.searchedCx = this.customers;
      this.calTotalTransaction();
      this.final = this.customers;
      console.log(this.final)

    });

    this._CustomerTransactionsDataService.getTransactionsData().subscribe(data => {
      this.transactions = data;
      // this.transactionsDate = data.date;
      this.calTotalTransaction();
      this.final = this.final.concat(this.transactions);
      console.log(this.final)

    });
  }
  
  calTotalTransaction(): void {
    this.customerTransactionTotal = this.customers.reduce((i, customer) => {
      const accumulatedAmount = this.transactions
        .filter(transaction => transaction.customer_id === +customer.id)
        .reduce((total, transaction) => total + transaction.amount, 0);
      i[customer.id] = accumulatedAmount;
      return i;
    }, {} as { [key: string]: number });
  }


  searchCustomers(): void {
    const name = this.searchInput;
    this.searchedCx = this.customers.filter(customer => customer.name.toLowerCase().includes(name.toLowerCase()));
  }


  selectCustomer(customerId: string): void {
    console.log(customerId)
    this.cxSelectedTransaction = this.final.filter(final => final.customer_id === +customerId);
    console.log(this.cxSelectedTransaction)
  }

  isShow = false;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  isGraph = false;

  graphDisplay() {
    this.isGraph = !this.isGraph;
  }
}
