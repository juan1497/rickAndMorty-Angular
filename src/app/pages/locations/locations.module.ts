import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsListComponent } from './components/locations-list/locations-list.component';
import { LocationsDetailComponent } from './components/locations-detail/locations-detail.component';
import { LocationsService } from './services/locations.service';


@NgModule({
  declarations: [
    LocationsListComponent,
    LocationsDetailComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule
  ],
  providers: [LocationsService]
})
export class LocationsModule { }
