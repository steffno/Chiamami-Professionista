import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
    {
      path: 'login',
      loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
      canLoad: [IntroGuard, AutoLoginGuard] // Check if we should show the introduction or forward to inside
    },
    {
      path: 'intro',
      loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
    },
    {
      path: 'home',
      loadChildren: ()=> import('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
