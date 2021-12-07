import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersDetailComponent } from './components/characters-detail/characters-detail.component';
import { CharactersService } from './services/characters.service';


@NgModule({
  declarations: [
    CharactersListComponent,
    CharactersDetailComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  providers:[CharactersService]
})
export class CharactersModule { }
