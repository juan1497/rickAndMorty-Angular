import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',loadChildren:()=>import('../app/pages/home/home.module').then(m=>m.HomeModule)
    },
    {
        path: 'characters',loadChildren:()=>import('../app/pages/characters/characters.module').then(m=>m.CharactersModule)
    },
    {
        path: 'locations',loadChildren:()=>import('../app/pages/locations/locations.module').then(m=>m.LocationsModule)
    },
    {
        path: 'episodes',loadChildren:()=>import('../app/pages/episodes/episodes.module').then(m=>m.EpisodesModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }