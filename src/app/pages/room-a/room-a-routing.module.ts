import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomAPage } from './room-a.page';

const routes: Routes = [
  {
    path: '',
    component: RoomAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomAPageRoutingModule {}
