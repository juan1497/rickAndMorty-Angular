import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'https://rickandmortyapi.com/api/character';
@Injectable()
export class CharactersService {

  constructor(private http: HttpClient) { }
  getCharacters() {
    return this.http.get(baseUrl);
  }
  getCharacterPag(url:string){
    return this.http.get(url);
  }
  getDetail(number:number){
    return this.http.get(`${baseUrl}/${number}`);
  }
}
