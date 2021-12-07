import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailComponent } from './components/characters-detail/characters-detail.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

const routes: Routes = [
  {
    path:'',component:CharactersListComponent
  },
  {
    path:':id',component:CharactersDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
