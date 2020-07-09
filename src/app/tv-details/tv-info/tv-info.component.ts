import { Component, OnInit, Input } from '@angular/core';

import { Show } from 'src/app/models';

@Component({
  selector: 'app-tv-info',
  templateUrl: './tv-info.component.html',
  styleUrls: ['./tv-info.component.scss']
})
export class TvInfoComponent implements OnInit {
  @Input() show: Show;

  constructor() { }

  ngOnInit(): void {
  }

}
