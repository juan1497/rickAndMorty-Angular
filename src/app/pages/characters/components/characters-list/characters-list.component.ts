import { Component, OnInit } from '@angular/core';
import { Characters } from '../../moduls/characters';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  charactersList:Characters[]=[]
  prev!:any;
  next!:any
  constructor(private api:CharactersService) { }

  ngOnInit(): void {
    this.characters()
  }
  characters(){
    this.api.getCharacters()
    .subscribe((data:any)=>{
      this.next=data.info.next;
      this.prev=data.info.prev;
      const results: Characters[] = data.results;
      const formattedResults = results.map(({ name, image,id }) => ({
        id,
        name,
        image,
      }));
      this.charactersList = formattedResults;
    })

  }
  moreCharacter(url:string){
    this.api.getCharacterPag(url)
    .subscribe((data:any)=>{
      this.next=data.info.next;
      this.prev=data.info.prev;
      const results: Characters[] = data.results;
      const formattedResults = results.map(({ name, image,id }) => ({
        id,
        name,
        image,
      }));
      this.charactersList = formattedResults;
    })
  }

}
