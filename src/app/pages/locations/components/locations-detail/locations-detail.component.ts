import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Locations } from '../../moduls/locations';
import { LocationsService } from '../../services/locations.service';

@Component({
  selector: 'app-locations-detail',
  templateUrl: './locations-detail.component.html',
  styleUrls: ['./locations-detail.component.scss']
})
export class LocationsDetailComponent implements OnInit {
  public id:any
  location!:Locations
  constructor(private route: ActivatedRoute,private api:LocationsService) { }

  ngOnInit(): void {
    const src="../../../../../assets/img/planet.png"
    this.route.paramMap.subscribe(params => {
      this.id=params.get('id');
    });
    this.api.getDetail(this.id)
    .subscribe((data:any) =>{
      this.location={
        id:data.id,
        name:data.name,
        type:data.type,
        dimension:data.dimension,
        habitants:data.residents.length,
        image:src
      }
    })
  }

}
