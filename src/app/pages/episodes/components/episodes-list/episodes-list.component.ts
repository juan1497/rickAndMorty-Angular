import { Component, OnInit } from '@angular/core';
import { Episodes } from '../../moduls/episodes';
import { EpisodesService } from '../../service/episodes.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {
  episodesList:Episodes[]=[]
  prev!:any;
  next!:any;
  constructor(private api:EpisodesService) { }

  ngOnInit(): void {
    this.episodes()
  }
  episodes(){
    const src="../../../../../assets/img/screen.png"
    this.api.getEpisodes()
    .subscribe((data:any)=>{
      this.next=data.info.next;
      this.prev=data.info.prev;
      const results: Episodes[] = data.results;

      const formattedResults = results.map(({ name,id,episode }) => ({
        id,
        name,
        episode,
        image:src
      }));
      this.episodesList = formattedResults;
    })

  }
  moreEpisodes(url:string){
    const src="../../../../../assets/img/screen.png"
    this.api.getEpisodesPag(url)
    .subscribe((data:any)=>{
      this.next=data.info.next;
      this.prev=data.info.prev;
      const results: Episodes[] = data.results;
      const formattedResults = results.map(({ name,id,episode}) => ({
        id,
        name,
        episode,
        image:src
      }));
      this.episodesList = formattedResults;
    })
  }

}
