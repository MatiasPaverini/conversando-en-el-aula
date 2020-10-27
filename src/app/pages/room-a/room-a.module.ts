import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomAPageRoutingModule } from './room-a-routing.module';

import { RoomAPage } from './room-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomAPageRoutingModule
  ],
  declarations: [RoomAPage]
})
export class RoomAPageModule {}
