import { Episode } from './episode';

export interface Season {
  id: number;
  name: string;
  overview: string;
  posterPath: string;
  seasonNumber: number;
  airDate: Date;
  episodes: Episode[];
}
