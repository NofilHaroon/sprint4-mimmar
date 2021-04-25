import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";
// readonly APIUrl = "https://mimmarbackend3.herokuapp.com/";
readonly ThumbnailUrl = "http://127.0.0.1:8000/media/";
  
  constructor(private http:HttpClient) { }

  extra_info : listing_service = {  
    ListingId: 1,
    Title: "string",
    Category: "string",
    Description: "string",
    Rating: 1,
    Thumbnail: "string",
    Img_one: "string",    
    Img_two: "string",
    Img_three: "string"
  };

  getServiceList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/service/');
  }

  addService(val:any){
    return this.http.post(this.APIUrl + '/service/', val);
  }

  updateService(val:any){
    return this.http.put(this.APIUrl + '/service/', val);
  }

  deleteService(val:any){
    return this.http.delete(this.APIUrl + '/service/' + val);
  }

  getAllServices():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/service/');
  }

  getListing():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/listing/');
  }

  addListing(val:any){
    return this.http.post(this.APIUrl + '/listing/', val);
  }

  updateListing(val:any){
    return this.http.put(this.APIUrl + '/listing/', val);
  }

  deleteListing(val:any){
    return this.http.delete(this.APIUrl + '/listing/' + val);
  }

  getAllListings():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/listing/');
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/SaveFile',val);
  }

  set_extra(str: listing_service) {
    this.extra_info = str;
  }
  
  get_info() {
    return this.extra_info;
  }

  getData(): Observable<any>{
    const url = 'https://randomuser.me/api/?results=100'
    return this.http.get<any>(url)
  }

}

export interface listing_service {
  ListingId: number,
  Title: string,
  Category: string,
  Description: string,
  Rating: number,
  Thumbnail: string,
  Img_one: string,
  Img_two: string,
  Img_three: string,
}


