import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],exports:[NavigationComponent]
})
export class CoreModule { }
