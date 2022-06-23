import { ScrollDispatcher } from '@angular/cdk/overlay';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, map, pairwise, switchMap, throttleTime } from 'rxjs';

import { statusLabels } from '@core/constants';
import { Status } from '@core/enums';
import { Book, GoogleBook } from '@core/models';
import { BooksService } from '../../services';

@UntilDestroy()
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnInit, AfterViewInit {
  @ViewChild(CdkVirtualScrollViewport) virtualScroll!: CdkVirtualScrollViewport;
  @Input() books: GoogleBook[] = [];
  @Output() loadNextBatch: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isLoading = false;
  Status = Status;
  statusLabels = statusLabels;

  constructor(private scrollDispatcher: ScrollDispatcher, private ngZone: NgZone, private booksService: BooksService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.manageVirtualScroll();
  }

  // Observe scroll and modify offset and Call API for next batch of data
  manageVirtualScroll(): void {
    this.scrollDispatcher
      ?.scrolled()
      .pipe(
        map(() => this.virtualScroll?.measureScrollOffset('bottom')),
        pairwise(), // Get scroll offset in pairs, so that we can see whether it is increasing or decreasing
        filter(([y1, y2]) => y2 < y1 && y2 < 60), //  Allow to continue only when the offset is near to the bottom
        throttleTime(200), // Throttle so that we don’t get repeated scroll events and just one in 200 ms
        untilDestroyed(this)
      )
      .subscribe(() => {
        this.ngZone.run(() => {
          this.loadNextBatch.emit(true);
        });
      });
  }

  addBookToShelf(book: GoogleBook, status: Status): void {
    this.booksService
      .getGoogleBookData(book)
      .pipe(switchMap((bookData: Partial<Book>) => this.booksService.save({ ...bookData, status } as Book)))
      .subscribe((data) => console.log(data));
  }
}
