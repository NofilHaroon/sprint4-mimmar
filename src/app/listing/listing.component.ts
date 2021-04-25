import { Component, OnInit } from '@angular/core';
import { TestService} from '../test.service';
import { RouterModule, Routes, Router } from '@angular/router';

// import {ListingtestService, listing_service} from '../listingtest.service';
import{ SharedService, listing_service } from 'src/app/shared.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  
  totalRecords: string = "";
  page:number=1
  constructor (private service:SharedService, private RandomUser:SharedService , private test_service: SharedService, private router: Router){}

  Listinginfo:any = [];
  Thumbnail:string ="";
  ThumbnailPath:string="";
  Path_Thumbnail:string="assets\\Cards\\";

  ngOnInit(): void {
    this.refreshListing();
  }

  refreshListing(){
    this.service.getListing().subscribe(data => {
      this.Listinginfo=data;
    });
  }

  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.Thumbnail=data.toString();
      this.ThumbnailPath=this.service.ThumbnailUrl+this.Thumbnail;
    })
  }

  send_info(test: listing_service) {
    // console.log(test)
    this.test_service.set_extra(test)
    this.router.navigate(['../display'])
  }

}
