import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomBPage } from './room-b.page';

const routes: Routes = [
  {
    path: '',
    component: RoomBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomBPageRoutingModule {}
