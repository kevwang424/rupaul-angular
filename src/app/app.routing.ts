import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ContestantComponent } from './components/contestant.component'
import { AboutComponent } from './components/about.component'

const appRoutes: Routes = [
  {
    path: '',
    component: ContestantComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
