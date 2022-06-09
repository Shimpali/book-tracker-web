import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cardLayout = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Tablet])
    .pipe(map(({ matches }) => this.setLayout(matches)));
  miniCardData = [
    {
      title: 'Total Sales',
    },
    {
      title: 'Average Order Value',
    },
    {
      title: 'Total Orders',
    },
    {
      title: 'Total Orders',
    },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}

  setLayout(matches: boolean) {
    if (matches) {
      return {
        columns: 2,
        miniCard: { cols: 1, rows: 1 },
        table: { cols: 2, rows: 3 },
      };
    }

    return {
      columns: 4,
      miniCard: { cols: 1, rows: 1 },
      table: { cols: 4, rows: 4 },
    };
  }
}
