import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvPosterComponent } from './tv-details/tv-poster/tv-poster.component';
import { TvInfoComponent } from './tv-details/tv-info/tv-info.component';
import { TvSeasonComponent } from './tv-details/tv-season/tv-season.component';
import { TvEpisodeComponent } from './tv-details/tv-season/tv-episode/tv-episode.component';

@NgModule({
  declarations: [
    AppComponent,
    TvDetailsComponent,
    TvPosterComponent,
    TvInfoComponent,
    TvSeasonComponent,
    TvEpisodeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
