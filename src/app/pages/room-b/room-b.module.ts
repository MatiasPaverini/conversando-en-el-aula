import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomBPageRoutingModule } from './room-b-routing.module';

import { RoomBPage } from './room-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomBPageRoutingModule
  ],
  declarations: [RoomBPage]
})
export class RoomBPageModule {}
