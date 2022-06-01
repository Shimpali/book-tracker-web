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
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}

  setLayout(matches: boolean) {
    if (matches) {
      return {
        columns: 1,
        miniCard: { cols: 1, rows: 1 },
        wantToRead: { cols: 1, rows: 2 },
        graph: { cols: 1, rows: 2 },
        table: { cols: 1, rows: 2 },
      };
    }

    return {
      columns: 3,
      miniCard: { cols: 1, rows: 1 },
      wantToRead: { cols: 3, rows: 2 },
      graph: { cols: 3, rows: 2 },
      table: { cols: 3, rows: 2 },
    };
  }
}
