import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';

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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
import { MagicBall } from './features/magic-ball/magic-ball';

import { loggingInterceptor } from './features/interceptors/logging-interceptor';
import { errorInterceptor } from './features/interceptors/error-interceptor';
import { authInterceptor } from './features/interceptors/auth-interceptor';
import { LoggerInterceptor } from './features/interceptors/logger-interceptor';
import { LoadingIndicator } from './features/loading-indicator/loading-indicator';
import { Feedback } from './features/feedback/feedback';


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
    MagicBall,
    LoadingIndicator,
    Feedback,
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
    MatSnackBarModule,
    MatProgressSpinnerModule
    
  ],
  exports: [
    LyricsFinder
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    // provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([loggingInterceptor, errorInterceptor, authInterceptor]), withInterceptorsFromDi()),

    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: LoggerInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [App]
})
export class AppModule { }
