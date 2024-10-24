import { Component, Input, OnInit } from '@angular/core';
import { imovie } from 'src/app/shared/model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
@Input()movie!:imovie
  constructor() { }

  ngOnInit(): void {
  }

}
