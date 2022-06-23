import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Book } from '@core/models';

export class Board {
  constructor(public name: string, public columns: Column[]) {}
}

export class Column {
  constructor(public name: string, public id: string, public tasks: string[]) {}
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  boards: any[] = [
    {
      title: 'Want To Read',
      books: [
        {
          _id: { $oid: '629e03173510c5426954607e' },
          title: 'The Eye Of The World',
          authors: ['Robert Jordan'],
          description: '',
          cover:
            'http://books.google.com/books/content?id=MXj0THxYdkMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          pageCount: { $numberInt: '832' },
          link: 'https://play.google.com/store/books/details?id=MXj0THxYdkMC&source=gbs_api',
          categories: ['Fiction'],
          volumeId: 'MXj0THxYdkMC',
          status: 'READ',
          createdAt: { $date: { $numberLong: '1654522647227' } },
          updatedAt: { $date: { $numberLong: '1654522647227' } },
          __v: { $numberInt: '0' },
        },
        {
          _id: { $oid: '629e03173510c5426954607e' },
          title: 'The Eye Of The World',
          authors: ['Robert Jordan'],
          description: '',
          cover:
            'http://books.google.com/books/content?id=MXj0THxYdkMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          pageCount: { $numberInt: '832' },
          link: 'https://play.google.com/store/books/details?id=MXj0THxYdkMC&source=gbs_api',
          categories: ['Fiction'],
          volumeId: 'MXj0THxYdkMC',
          status: 'READ',
          createdAt: { $date: { $numberLong: '1654522647227' } },
          updatedAt: { $date: { $numberLong: '1654522647227' } },
          __v: { $numberInt: '0' },
        },
      ],
    },
  ];
  public board: any = new Board('Test Board', [
    new Column('Ideas', '21', ['Some random idea', 'This is another random idea']),
    new Column('Research', '32', ['Lorem ipsum', 'foo']),
  ]);
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 20;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  constructor() {}

  ngOnInit(): void {}

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   }
  // }

  /**
   * An array of all track ids. Each id is associated with a `cdkDropList` for the
   * track books. This property can be used to connect all drop lists together.
   */
  bookIds(boardIndex: number): string[] {
    return this.boards[boardIndex]?.tracks?.map((track: { id: string }) => track?.id);
  }

  onBookDrop(event: CdkDragDrop<Book[]>) {
    // In case the destination container is different from the previous container, we
    // need to transfer the given book to the target data array. This happens if
    // a book has been dropped on a different track.
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  // onBookDrop(event: CdkDragDrop<Book[]>) {
  //   moveItemInArray(
  //     event.container.data,
  //     event.previousIndex,
  //     event.currentIndex
  //   );
  // }

  addEditBook(book: Book, track: Book, edit = false) {
    // Use the injected dialog service to launch the previously created edit-book
    // component. Once the dialog closes, we assign the updated book data to
    // the specified book.
    // this._dialog
    //   .open(EditBookComponent, { data: { book, edit }, width: '500px' })
    //   .afterClosed()
    //   .subscribe((newBookData) =>
    //     edit
    //       ? Object.assign(book, newBookData)
    //       : track.books.unshift(newBookData)
    //   );
  }

  deleteBook(book: Book, track: Book) {
    // Open a dialog
    // this._dialog
    //   .open(DeleteBookComponent, { data: book, width: '500px' })
    //   .afterClosed()
    //   .subscribe((response) => {
    //     // Wait for it to close and delete the book if the user agreed.
    //     if (response) {
    //       track.books.splice(track.books.indexOf(book), 1);
    //     }
    //   });
  }

  filterByDate(books: Book[], asc = 1) {
    books = [
      ...books.sort((a: any, b: any) => asc * (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())),
    ];
    console.log(books);
  }

  public dropGrid(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
  }

  public drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
