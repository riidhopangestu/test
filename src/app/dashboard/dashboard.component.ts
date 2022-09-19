import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService, Products, Users } from '../app.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProducttableDetailComponent } from '../producttable-detail/producttable-detail.component';
import { HttpClient } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';

const ELEMENT_DATA: Products[] = [];
const ELEMENT_USER: Users[] = [];

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss', './dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  displayedColumns1: string[] = ['id', 'title', 'thumbnail', 'description', 'stock', 'price'];
  displayedColumnsUser: string[] = ['id', 'firstName', 'lastName', 'birthDate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  dataSourceUser = new MatTableDataSource(ELEMENT_USER);

  posts : any
  posts1 : any

  chart1 : any

  result: any;
  coinPrice: any;
  coinName: any;
  chart: any = [];

  searchField: string = '';
  clearSearchField() {
    this.searchField = '';
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public dialog: MatDialog,
    private appService : AppService,
    private http : HttpClient
  ) { 
    this.appService.getDataProduct().subscribe((response:any) => {
      this.dataSource = response.products
      console.log(this.dataSource)
      this.posts = this.dataSource

      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort

    }),
    this.appService.getDataUser().subscribe((data:any) => {
      this.dataSourceUser = data.users
      console.log(this.dataSourceUser)
      this.posts1 = this.dataSourceUser

      this.dataSourceUser = new MatTableDataSource(this.posts1);
      this.dataSourceUser.paginator = this.paginator
      this.dataSourceUser.sort = this.sort
    })

    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.appService.cryptoData().subscribe((res) => {
      this.result = res;
      this.coinPrice = this.result.data.coins.map((coins: any) => coins.price);
      this.coinName = this.result.data.coins.map((coins: any) => coins.name);
      console.log(this.coinPrice);
      console.log(this.coinName);

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.coinName,
          datasets: [
            {
              data: this.coinPrice,
              borderColor: '#764cac',
              fill: false,
              label: 'Woocommerce',
              backgroundColor: '#baa5d5',
              borderWidth: 3,
            },
            {
              data: this.coinPrice,
              borderColor: '#d71149',
              fill: false,
              label: 'Bukalapak',
              backgroundColor: '#eb88a4',
              borderWidth: 3,
            },
            {
              data: this.coinPrice,
              borderColor: '#0095da',
              fill: false,
              label: 'Blibli',
              backgroundColor: '#7fcaec',
              borderWidth: 3,
            },
            {
              data: this.coinPrice,
              borderColor: '#ee4d2d',
              fill: false,
              label: 'Shopee',
              backgroundColor: '#f6a696',
              borderWidth: 3,
            },
            {
              data: this.coinPrice,
              borderColor: '#a20a0a',
              fill: false,
              label: 'Buattoko',
              backgroundColor: '#d08484',
              borderWidth: 3,
            },
          ],
        },
      });
    });
    
  }

  openDetail(product: any): void {
    let dialogRef = this.dialog.open(ProducttableDetailComponent, {
      height: '300px',
      width: '600px',
      data : product.id 
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
