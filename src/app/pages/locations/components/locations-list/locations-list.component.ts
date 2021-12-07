import { Component, OnInit } from '@angular/core';
import { Locations } from '../../moduls/locations';
import { LocationsService } from '../../services/locations.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent implements OnInit {
  locationList:Locations[]=[]
  prev!:any;
  next!:any
  constructor(private api:LocationsService) { }

  ngOnInit(): void {
    this.locations()
  }
  locations(){
    const src="../../../../../assets/img/planet.png"
    this.api.getLocations()
    .subscribe((data:any)=>{
      this.next=data.info.next;
      this.prev=data.info.prev;
      const results: Locations[] = data.results;
      const formattedResults = results.map(({ name,id,type,dimension }) => ({
        id,
        name,
        type,
        dimension,
        image:src
      }));
      this.locationList = formattedResults;
      
    })

  }
  moreLocations(url:string){
    const src="../../../../../assets/img/planet.png"
    this.api.getLocationsPag(url)
    .subscribe((data:any)=>{
      this.next=data.info.next;
      this.prev=data.info.prev;
      const results: Locations[] = data.results;
      const formattedResults = results.map(({ name,id,type,dimension}) => ({
        id,
        name,
        type,
        dimension,
        image:src
      }));
      this.locationList = formattedResults;
      
    })
  }

}
