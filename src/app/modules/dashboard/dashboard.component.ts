import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs';

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
  search: FormControl = new FormControl(null);

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      console.log(value);
    });
  }

  setLayout(matches: boolean) {
    if (matches) {
      return {
        columns: 1,
        miniCard: { cols: 1, rows: 1 },
        graph: { cols: 1, rows: 2 },
        table: { cols: 1, rows: 2 },
      };
    }

    return {
      columns: 4,
      miniCard: { cols: 1, rows: 1 },
      graph: { cols: 3, rows: 2 },
      table: { cols: 3, rows: 2 },
    };
  }
}
