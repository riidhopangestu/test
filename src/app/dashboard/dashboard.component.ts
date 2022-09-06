import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService, Products } from '../app.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Products[] = [];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss', './dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns1: string[] = ['id', 'title', 'description', 'price'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  data: Products[] = [];

  dataApp : any
  posts : any

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
    private appService : AppService
  ) { 
    this.appService.getDataProduct().subscribe((response:any) => {
      this.dataSource = response.products
      console.log(this.dataSource)
      this.posts = this.dataSource

      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
  }

  ngAfterViewInit() {
}

  ngOnInit(): void {
    // this.getDataApp()
  }

  // getDataApp(){
  //   this.appService.getDataApp().subscribe(res => {
  //     this.dataApp = res
  //     console.log(res)
  //   })
  // }

}
