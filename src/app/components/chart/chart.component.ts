import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  li:any; 
  lis:object[]; 
  chart=[];
  
  id:any;

  constructor(private http : HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.http.get('https://api.covidindiatracker.com/state_data.json') 
    
    .subscribe(data => { 
   
      this.id=this.route.snapshot.params['id']
      let res
     res = data;
     let nm=res.map(res=>res.id)
     for(var i=0;i<38;i++){
       if(this.id==nm[i]){
         console.log(res[i])
         res=data[i]
       
     
   
     console.log(res)
                      this.li=data;
                    console.log(this.id);
      
                        this.lis = res['districtData']; 
                        console.log(this.lis);
                        let name=res['districtData'].map(res=>res.name)
                        let confirmed=res['districtData'].map(res=>res.confirmed)
                        
                        this.chart=new Chart('canvas',{
                          type:'line',
                          data:{
                            labels:name,
                            datasets:[
                             
                              {
                                data:confirmed,
                                borderColor:'red',
                                fill:false
                              },
                            ]
                          },
                          options:{
                            legend:{
                              display:false
                            },
                            scales:{
                              xAxes:[{
                                display:true
                              }],
                              yAxes:[{
                                display:true
                              }]
                            }
                          }
                        })
                      }
                    }
  })

}
}
