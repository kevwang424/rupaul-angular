import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ContestantListComponent } from './components/contestant-list.component'
import { AboutComponent } from './components/about.component'
import { NewContestantComponent } from './components/new.contestant.component'

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
    component: NewContestantComponent
  },

  {
    path: '**',
    redirectTo: '/contestants'
  }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
