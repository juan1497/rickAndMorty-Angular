import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersDetail } from '../../moduls/characters';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {
  public id:any
  character!:CharactersDetail
  constructor(private route: ActivatedRoute,private api:CharactersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id=params.get('id');
    });
    this.api.getDetail(this.id)
    .subscribe((data:any) =>{
      this.character={
          id:data.id,
          name:data.name,
          image:data.image,
          status:data.status,
          gender:data.gender,
          species:data.species,
          origin:data.origin.name
      }
    })
  }

}
