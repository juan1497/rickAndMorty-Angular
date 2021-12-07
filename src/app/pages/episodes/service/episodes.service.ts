import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const baseUrl = 'https://rickandmortyapi.com/api/episode';
@Injectable()
export class EpisodesService {

  constructor(private http: HttpClient) { }
  getEpisodes() {
    return this.http.get(baseUrl);
  }
  getEpisodesPag(url:string){
    return this.http.get(url);
  }
  getDetail(number:number){
    return this.http.get(`${baseUrl}/${number}`);
  }
}
