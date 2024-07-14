import { AfterViewInit,Component,ViewChild } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

// don't know if they're needed or not

// import { MatPaginator } from '@angular/material';
// import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customersTransactions';

  ngOnInit(){}
}
