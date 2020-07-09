import { Component, OnInit } from '@angular/core';
import { TvService } from './services';
import { Show } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tvShows: Show[];

  constructor(private tvService: TvService) {}

  ngOnInit() {
    this.tvShows = this.tvService.getShows();
  }
}
