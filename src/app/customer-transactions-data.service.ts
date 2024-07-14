import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from './interfaces/customers';
// import {Customers} from '../interfaces/customers'
// import {Transactions} from '../interfaces/transactions'

// instead of any...do interfaces
@Injectable({
  providedIn: 'root'
})
export class CustomerTransactionsDataService {

  constructor(private _HttpClient:HttpClient) { }

  getCustomersData():Observable<any>
  {
    return this._HttpClient.get('http://localhost:3000/customers');
  }


  getTransactionsData():Observable<any>
  {
    return this._HttpClient.get('http://localhost:3000/transactions');
  }
}
