import { Component, OnInit } from '@angular/core';
import{ SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-ser',
  templateUrl: './show-ser.component.html',
  styleUrls: ['./show-ser.component.css']
})
export class ShowSerComponent implements OnInit {

  constructor(private service:SharedService) { }

  ServiceList:any = [];

  ngOnInit(): void {
    this.refreshSerList();
  }

  refreshSerList(){
    this.service.getServiceList().subscribe(data => {
      this.ServiceList=data;
    });
  }
}
