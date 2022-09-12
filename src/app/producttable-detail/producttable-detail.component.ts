import { Component, Inject, OnInit, } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AppService, Products } from '../app.service';

@Component({
  selector: 'app-producttable-detail',
  templateUrl: './producttable-detail.component.html',
  styleUrls: ['./producttable-detail.component.scss']
})
export class ProducttableDetailComponent implements OnInit {
    
  productdetail: any;
  constructor(private appService : AppService, private activatedRoute : ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any ) {
    
  }

  ngOnInit(): void {
    console.log(this.data);

    this.appService.getDetailProduct(this.data).subscribe((res:any)=> {
      this.productdetail = res;
    })
  } 

  }

