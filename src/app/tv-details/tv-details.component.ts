import { Component, OnInit, Input } from '@angular/core';

import { Show } from '../models';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {
  @Input() show: Show;

  constructor() { }

  ngOnInit(): void {
  }

}
