import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'book-tracker-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  obj = {
    a: 'a',
    b: 'b',
    c: 'c',
  };

  cardLayout = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Tablet])
    .pipe(map(({ matches }) => this.setLayout(matches)));

  miniCardData = [
    {
      title: 'Total Sales',
      value: '9465',
      isIncrease: true,
      color: 'primary',
      percentValue: '0.5383',
      icon: 'payments',
      isCurrency: true,
    },
    {
      title: 'Average Order Value',
      value: '465',
      isIncrease: false,
      color: 'accent',
      percentValue: '0.2544',
      icon: 'local_atm',
      isCurrency: true,
    },
    {
      title: 'Total Orders',
      value: '243',
      isIncrease: true,
      color: 'warn',
      percentValue: '0.4565',
      icon: 'shopping_cart',
      isCurrency: false,
    },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}

  setLayout(matches: boolean) {
    if (matches) {
      return {
        columns: 1,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 1, rows: 2 },
        graph: { cols: 1, rows: 2 },
        table: { cols: 1, rows: 2 },
      };
    }

    return {
      columns: 4,
      miniCard: { cols: 1, rows: 1 },
      chart: { cols: 1, rows: 5 },
      graph: { cols: 3, rows: 2 },
      table: { cols: 3, rows: 2 },
    };
  }
}
