import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<any>=[
    {
      "Id" :1,
      "Name" :"Biral House",
      "Type":"House",
      "Price": 12000
    },
    {
      "Id" :2,
      "Name" :"Erose House",
      "Type":"House",
      "Price": 14300
    },
    {
      "Id" :3,
      "Name" :"Safayet House",
      "Type":"House",
      "Price": 14500
    },
    {
      "Id" :4,
      "Name" :"Shovon House",
      "Type":"House",
      "Price": 15000
    },
    {
      "Id" :5,
      "Name" :"Tahsin House",
      "Type":"House",
      "Price": 10000
    },
    {
      "Id" :6,
      "Name" :"Tahmid House",
      "Type":"House", 
      "Price": 19000
    },

]
  constructor() { }

  ngOnInit(): void {
  }

}
