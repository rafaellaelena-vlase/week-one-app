import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatError } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoodLogger } from './features/mood-logger/mood-logger';
import { Home } from './features/home/home';
import { Profile } from './features/profile/profile';
import { Settings } from './features/settings/settings';
import { CustomInput } from './features/custom-input/custom-input';
import { MusicStats } from './features/music-stats/music-stats';
import { CustomDirective } from './features/directives/custom-directive';
import { InvitePreview } from './features/invite-preview/invite-preview';
import { LyricsFinder } from './features/lyrics-finder/lyrics-finder';

@NgModule({
  declarations: [
    App,
    MoodLogger,
    Home,
    Profile,
    Settings,
    CustomInput,
    MusicStats,
    CustomDirective,
    InvitePreview,
    LyricsFinder,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatSlideToggle,
    MatError,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
