import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent implements OnInit {
  li:any; 
  lis:object[]; 
  dis:object[];
  cas:object[];
  id:any;
  no:any;
  constructor(private http : HttpClient,private route:ActivatedRoute
    ){ 
    
  } 
  
  ngOnInit(): void { 
    
    this.http.get('https://api.covidindiatracker.com/state_data.json') 
    
    .subscribe(data => { 
   
      this.id=this.route.snapshot.params['id']
      let res;
       res = data;
      let nm=res.map(res=>res.id)
      for(var i=0;i<10;i++){
        if(this.id==nm[i]){
          console.log(res[i])
          res=data[i]
        
                      this.li=data
                      console.log(this.id)
      
                        this.lis = res['districtData']; 
                        console.log(this.lis);
        }}
   });
  }
}