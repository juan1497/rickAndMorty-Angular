import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';
import { EpisodesDetailComponent } from './components/episodes-detail/episodes-detail.component';
import { EpisodesService } from './service/episodes.service';


@NgModule({
  declarations: [
    EpisodesListComponent,
    EpisodesDetailComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule
  ],providers:[EpisodesService]
})
export class EpisodesModule { }
