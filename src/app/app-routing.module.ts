import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)},
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./header/header.component').then( m => m.HeaderComponent)
  },
  {
    path: 'room-a',
    loadChildren: () => import('./pages/room-a/room-a.module').then( m => m.RoomAPageModule)
  },
  {
    path: 'room-b',
    loadChildren: () => import('./pages/room-b/room-b.module').then( m => m.RoomBPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
