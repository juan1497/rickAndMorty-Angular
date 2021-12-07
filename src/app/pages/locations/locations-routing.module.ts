import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsDetailComponent } from './components/locations-detail/locations-detail.component';
import { LocationsListComponent } from './components/locations-list/locations-list.component';

const routes: Routes = [
  {
    path:'',component:LocationsListComponent
  },
  {
    path:':id',component:LocationsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
