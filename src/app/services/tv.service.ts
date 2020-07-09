import { Injectable } from '@angular/core';

import * as tvDetailsJson from '../../assets/data/tv.details.json';
import * as tvSeasonJson from '../../assets/data/tv.season.json';
import { Show, Network, ProductionCompany, Season } from '../models';
import { Episode } from '../models/episode';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  getShows(): Show[] {
    return [
      {
        id: tvDetailsJson.id,
        name: tvDetailsJson.name,
        overview: tvDetailsJson.overview,
        homepage: tvDetailsJson.homepage,
        seasons: tvDetailsJson.seasons.map(
          ({ id, name, overview, season_number, episode_count, air_date, poster_path}) => ({
            id,
            name,
            overview,
            seasonNumber: season_number,
            episodeCount: episode_count,
            airDate: new Date(air_date),
            posterPath: poster_path,
            episodes: null,
          })
        ) as Season[],
        networks: tvDetailsJson.networks.map(({ id, name, logo_path }) => ({
          id,
          name,
          logoPath: logo_path,
        })) as Network[],
        productionCompanies: tvDetailsJson.production_companies.map(
          ({ id, name, logo_path, origin_country }) => ({
            id,
            name,
            logoPath: logo_path,
            originCountry: origin_country,
          })) as ProductionCompany[],
        status: tvDetailsJson.status,
        popularity: tvDetailsJson.popularity,
        voteAverage: tvDetailsJson.vote_average,
        posterPath: tvDetailsJson.poster_path,
      },
    ] as Show[];
  }

  getSeasons(showId: number) {
    return [
      {
        id: tvSeasonJson.id,
        name: tvSeasonJson.name,
        overview: tvSeasonJson.overview,
        seasonNumber: tvSeasonJson.season_number,
        airDate: new Date(tvSeasonJson.air_date),
        posterPath: tvSeasonJson.poster_path,
        episodes: tvSeasonJson.episodes.map(
          ({ id, name, overview, episode_number }) => ({ id, name, overview, episodeNumber: episode_number })
        ) as Episode[],
      },
    ] as Season[];
  }
}
