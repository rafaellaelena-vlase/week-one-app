import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LyricsFinder } from './features/lyrics-finder/lyrics-finder';
import { Home } from './features/home/home';
import { MoodLogger } from './features/mood-logger/mood-logger';
import { Profile } from './features/profile/profile';
import { Settings } from './features/settings/settings';
import { CustomInput } from './features/custom-input/custom-input';
import { MusicStats } from './features/music-stats/music-stats';
import { InvitePreview } from './features/invite-preview/invite-preview';
import { MagicBall } from './features/magic-ball/magic-ball';
import { Feedback } from './features/feedback/feedback';
import { PageNotFound } from './features/page-not-found/page-not-found';

const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mood-logger',
    component: MoodLogger
  },
  {
    path: 'profile',
    component: Profile
  },
  {
    path: 'settings',
    component: Settings
  },
  {
    path: 'feedback',
    component: Feedback
  },
  {
    path: 'stats',
    component: MusicStats
  },
  {
    path: 'invite',
    component: InvitePreview
  },
  {
    path: 'lyrics-finder',
    component: LyricsFinder
  },
  {
    path: 'lyrics-finder/:artist/:song',
    component: LyricsFinder
  },
  {
    path: 'magic-ball',
    component: MagicBall
  },
  {
    path : '**',
    component: PageNotFound 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
