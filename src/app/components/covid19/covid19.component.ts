import { Component, OnInit, ViewChild } from '@angular/core';
import { Reports } from 'src/reports';
import {MatTableDataSource} from '@angular/material/table'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {
  REPORT:Reports[]=[];
 
displayColumns:string[]=['state','active','confirmed','deaths','getdetails','dist'];
dataSource=new MatTableDataSource<Reports>(this.REPORT);
@ViewChild(MatSort,{static:true})sort:MatSort;
constructor(private http : HttpClient,
	private router: Router ,private service:DataService){ 
	
} 
  
  ngOnInit(): void {
    this.dataSource.sort=this.sort;
    this.getAllReports();
  }
public getAllReports(){
  let resp=this.service.getOne();
  resp.subscribe(report=>this.dataSource.data=report as Reports[]);

console.log(this.dataSource)
}}
