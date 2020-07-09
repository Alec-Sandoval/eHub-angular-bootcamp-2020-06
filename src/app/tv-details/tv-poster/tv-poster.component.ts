import { Component, OnInit, Input } from '@angular/core';

import { Show } from 'src/app/models';

@Component({
  selector: 'app-tv-poster',
  templateUrl: './tv-poster.component.html',
  styleUrls: ['./tv-poster.component.scss']
})
export class TvPosterComponent implements OnInit {
  @Input() show: Show;

  constructor() { }

  ngOnInit(): void {
  }

}
