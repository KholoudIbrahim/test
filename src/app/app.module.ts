import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GraphComponent } from './graph/graph.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from './material.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
// import {MaterialModule} from '@angular/material/core/index';
import { FormsModule } from '@angular/forms';
// import { CustomerListComponent } from './compontents/customer-list/customer-list.component';
// import { TransactionChartComponent } from './compontents/transaction-chart/transaction-chart.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TableComponent } from './table/table.component';
// import { NoDataFoundComponent } from './compontents/no-data-found/no-data-found.component';
import {MatSelectModule} from '@angular/material/select'
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button'
import {MatBadgeModule} from '@angular/material/badge'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatCardModule} from '@angular/material/card'
import {MatSliderModule} from '@angular/material/slider'
import {MatSortModule} from '@angular/material/sort';
import { MaterialModuleTsComponent } from './material.module.ts/material.module.ts.component'
import {CustomerTransactionsDataService} from './customer-transactions-data.service';
import { ChartComponent } from './chart/chart.component';
import { CustomNumberPipe } from './custom-number.pipe'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    GraphComponent,
    TableComponent,
    MaterialModuleTsComponent,
    ChartComponent,
    CustomNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MaterialModule   
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSliderModule,
    MatSortModule
  ],
  providers: [CustomerTransactionsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
