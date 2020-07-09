import { Component, OnInit, Input } from '@angular/core';

import { Show, Season } from 'src/app/models';
import { TvService } from 'src/app/services';

@Component({
  selector: 'app-tv-season',
  templateUrl: './tv-season.component.html',
  styleUrls: ['./tv-season.component.scss']
})
export class TvSeasonComponent implements OnInit {
  @Input() show: Show;
  public seasons: Season[];

  constructor(private tvService: TvService) {}

  ngOnInit() {
    this.seasons = this.tvService.getSeasons(this.show.id);
  }

}
