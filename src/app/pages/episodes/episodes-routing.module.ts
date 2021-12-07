import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesDetailComponent } from './components/episodes-detail/episodes-detail.component';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';

const routes: Routes = [
  {
    path:'',component:EpisodesListComponent
  },
  {
    path:':id',component:EpisodesDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
