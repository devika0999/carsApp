import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private myapi:ApiService) { 

    this.fetchData()
  }
  fetchData=()=>{

    this.myapi.viewCars().subscribe(
      (data)=>{
        this.carsData=data
      }
    )

  }

  carsData:any=[]

  ngOnInit(): void {
  }

}
