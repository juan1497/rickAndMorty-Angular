import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



const baseUrl = 'https://rickandmortyapi.com/api/location';
@Injectable()
export class LocationsService {

  constructor(private http: HttpClient) { }
  getLocations() {
    return this.http.get(baseUrl);
  }
  getLocationsPag(url:string){
    return this.http.get(url);
  }
  getDetail(number:number){
    return this.http.get(`${baseUrl}/${number}`);
  }
}
