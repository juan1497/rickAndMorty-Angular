import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episodes } from '../../moduls/episodes';
import { EpisodesService } from '../../service/episodes.service';

@Component({
  selector: 'app-episodes-detail',
  templateUrl: './episodes-detail.component.html',
  styleUrls: ['./episodes-detail.component.scss']
})
export class EpisodesDetailComponent implements OnInit {
  public id:any
  episode!:Episodes
  constructor(private route: ActivatedRoute,private api:EpisodesService) { }

  ngOnInit(): void {
    const src="../../../../../assets/img/screen.png"
    this.route.paramMap.subscribe(params => {
      this.id=params.get('id');
    });
    this.api.getDetail(this.id)
    .subscribe((data:any) =>{
      this.episode={
        id:data.id,
        name:data.name,
        episode:data.episode,
        air_date:data.air_date,
        created:data.created,
        characters:data.characters.length,
        image:src
      }
    })
  }

}
