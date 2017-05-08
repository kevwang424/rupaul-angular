import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ContestantComponent } from './components/contestant.component'
import { AboutComponent } from './components/about.component'
import { NewContestantComponent } from './components/new.contestant.component'

const appRoutes: Routes = [
  {
    path: '',
    component: ContestantComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contestants/new',
    component: NewContestantComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
