import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/auth/auth.page').then(m => m.AuthPage),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.routes').then(m => m.routes),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'plant-list',
    loadComponent: () => import('./pages/plant-list/plant-list.page').then( m => m.PlantListPage)
  },
  {
    path: 'favorites',
    loadComponent: () => import('./pages/favorites/favorites.page').then( m => m.FavoritesPage)
  },
  {
    path: 'care-hacks',
    loadComponent: () => import('./pages/care-hacks/care-hacks.page').then( m => m.CareHacksPage)
  },
  {
  path: 'plant/:id',
  loadComponent: () =>
    import('./pages/plant-detail/plant-detail.page').then(m => m.PlantDetailPage),
},
{
  path: 'care-hack/:id',
  loadComponent: () =>
    import('./pages/care-hack-detail/care-hack-detail.page')
      .then(m => m.CareHackDetailPage),
},
{
  path: 'plants/:type/:value',
  loadComponent: () =>
    import('./pages/plant-list/plant-list.page')
      .then(m => m.PlantListPage),
}



];
