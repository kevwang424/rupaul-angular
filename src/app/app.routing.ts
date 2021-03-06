import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ContestantListComponent } from './components/contestant-list.component'
import { AboutComponent } from './components/about.component'
import { ContestantFormComponent } from './components/contestant-form.component'

const appRoutes: Routes = [
  {
    path: 'contestants',
    component: ContestantListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contestants/new',
    component: ContestantFormComponent
  },
  // routing for contestant editing
  {
    path: 'contestants/:id/edit',
    component: ContestantFormComponent
  },
  {
    path: '**',
    redirectTo: '/contestants'
  }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
