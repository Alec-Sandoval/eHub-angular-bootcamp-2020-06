import { Network } from './network';
import { ProductionCompany } from './production-company';
import { Season } from './season';

export interface Show {
  id: number;
  name: string;
  overview: string;
  homepage: string;
  seasons: Season[];
  networks: Network[];
  productionCompanies: ProductionCompany[];
  status: string;
  popularity: number;
  voteAverage: number;
  posterPath: string;
}
