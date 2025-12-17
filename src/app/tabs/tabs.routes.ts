import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../pages/home/home.page')
            .then(m => m.HomePage),
      },

      // 🔹 zoznam podľa kategórie (light / water)
      {
        path: 'list/:type/:value',
        loadComponent: () =>
          import('../pages/plant-list/plant-list.page')
            .then(m => m.PlantListPage),
      },

      {
        path: 'favorites',
        loadComponent: () =>
          import('../pages/favorites/favorites.page')
            .then(m => m.FavoritesPage),
      },

      {
        path: 'care-hacks',
        loadComponent: () =>
          import('../pages/care-hacks/care-hacks.page')
            .then(m => m.CareHacksPage),
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
