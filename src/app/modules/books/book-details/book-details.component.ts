import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleBook } from '@app/@core/models';
import { GoogleBooksService } from '../google-books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book!: GoogleBook;

  constructor(private activatedRoute: ActivatedRoute, private googleBooksService: GoogleBooksService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getBookDetails(params?.['id']);
    });
  }

  get imageLink(): string {
    const { large, extraLarge } = this.book?.volumeInfo?.imageLinks;
    return extraLarge || large;
  }

  getBookDetails(id: string): void {
    // this.googleBooksService.getById(id).subscribe((book: any) => {
    //   this.book = book;
    // });

    this.book = {
      kind: 'books#volume',
      id: 'MXj0THxYdkMC',
      etag: 'vH2MDmRe0C8',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/MXj0THxYdkMC',
      volumeInfo: {
        title: 'The Eye Of The World',
        subtitle: 'Book 1 of the Wheel of Time (Now a major TV series)',
        authors: ['Robert Jordan'],
        publisher: 'Hachette UK',
        publishedDate: '2009-10-27',
        description:
          "<p><b> Now a major TV series on Prime Video </b><br><b><br>Prepare to turn the Wheel of Time - discover the first novel in one of the most influential and popular fantasy epics ever published.</b><br><br>When their village is attacked by terrifying creatures, Rand al'Thor and his friends are forced to flee for their lives. An ancient evil is stirring, and its servants are scouring the land for the Dragon Reborn - the prophesised hero who can deliver the world from darkness. <br><br>In this Age of myth and legend, the Wheel of Time turns. What was, what may be, and what is, may yet fall under the Shadow. <br><br><b> ONE OF TIME MAGAZINE'S TOP 100 FANTASY BOOKS OF ALL TIME<br></b><br><b>'Epic in every sense' - <i>Sunday Times</i></b><br><br><b>'With the Wheel of Time, Jordan has come to dominate the world that Tolkien began to reveal'</b> <i>New York Times</i><br><br><b><i>'</i></b><b>[The] huge ambitious Wheel of Time series helped redefine the genre'</b> George R. R. Martin<br><br><b>'A fantasy phenomenon' </b><i>SFX</i><br><br>The Wheel of Time series:<br>Book 1: <i>The Eye of the World</i><br>Book 2:<i> The Great Hunt<br>Book 3: The Dragon Reborn<br>Book 4: The Shadow Rising<br>Book 5: The Fires of Heaven<br>Book 6: Lord of Chaos<br>Book 7: A Crown of Swords<br>Book 8: The Path of Daggers<br>Book 9: Winter's Heart<br>Book 10: Crossroads of Twilight<br>Book 11: Knife of Dreams<br>Book 12: The Gathering Storm<br>Book 13: Towers of Midnight<br>Book 14: A Memory of Light</i><br>Prequel:<i> New Spring</i><br><br>Look out for the companion book: <i>The World of Robert Jordan's The Wheel of Time</i></p>",
        industryIdentifiers: [
          { type: 'ISBN_10', identifier: '074811534X' },
          { type: 'ISBN_13', identifier: '9780748115341' },
        ],
        readingModes: { text: true, image: false },
        pageCount: 832,
        printedPageCount: 663,
        printType: 'BOOK',
        categories: ['Fiction / Fantasy / Epic', 'Fiction / Fantasy / General'],
        averageRating: 4,
        ratingsCount: 217,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '0.17.15.0.preview.2',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=MXj0THxYdkMC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70qZebtKwGp28MAuT6Ux92vSeXQjDdWuaQ4GX46sT6gH1zgjIiiNsd3GXiraGdO7Jjg-bsbrWrkBcXWR5tWy8CRScOMAurqtojQFXHaRPVPyAUNPcIdg2bn82rlXVr4bPurk9Jm&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=MXj0THxYdkMC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70fpQcQPocZNFhskXT0RSdJIlAtf4Kh8I4R5jai1LSp1lgqqz3avo2QKIWOopQsMX8mlr31INhpr2U7xQajQchXamykLvFXt957vHuEV_R6OeQMpKEP0nVLjiOGBvt9Fni0HJY3&source=gbs_api',
          small:
            'http://books.google.com/books/content?id=MXj0THxYdkMC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE71edXJ0FbAGo0_jhpEkt80V3Ip3y_XeeIvmPF8yGfXeOWKO2IE8FFYVw39LHU3yzqrlQINhkiuAAVcVExGSZ9tCZ73LO1np4rxTilDsB0iDJ6L49YK9AT5_KQXYOyuT_GuQpoU8&source=gbs_api',
          medium:
            'http://books.google.com/books/content?id=MXj0THxYdkMC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72X32rqJFUuq_MhRGNt2dyt173U_x5ugh4fp7tu9EEp_taRgMQ5n-xobqWB0jziRihu70fkwQaTYkSy0bBdBiwH_27yv8I1PqbikjMbhehIdK4wYAn0Z4QZiC4l2ZVxg0p-UNza&source=gbs_api',
          large:
            'http://books.google.com/books/content?id=MXj0THxYdkMC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73O-GVKnDsFGOjSMj4ZLE9YG2X8auC0y4KAwL9hMoq0TW6XAiVuELVP-w0eFmNgDIUryBy10MMsYTKWFAFtQfKVsK0Tx2Mu3TGVUT2NfsP8SUMTGPCvgjg3mmb5lOXhriwUB7fn&source=gbs_api',
          extraLarge:
            'http://books.google.com/books/content?id=MXj0THxYdkMC&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE72v5w2tc5Sk57sDy1w6ziemXU96Slk9zw4-icWSJVc9rTTWdUKSN635ejuCgMton0w1kNEg2JMXSeAMpprKVWGTsDawRFeUP5VDEDBG3yxlcrCD2Lhk4TxfDxmos8WU0LQaaCJM&source=gbs_api',
        },
        language: 'en',
        previewLink: 'http://books.google.co.in/books?id=MXj0THxYdkMC&hl=&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=MXj0THxYdkMC&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=MXj0THxYdkMC',
      },
      layerInfo: {
        layers: [{ layerId: 'geo', volumeAnnotationsVersion: '21' }],
      },
      saleInfo: {
        country: 'IN',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: { amount: 531, currencyCode: 'INR' },
        retailPrice: { amount: 296.3, currencyCode: 'INR' },
        buyLink:
          'https://play.google.com/store/books/details?id=MXj0THxYdkMC&rdid=book-MXj0THxYdkMC&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: { amountInMicros: 531000000, currencyCode: 'INR' },
            retailPrice: { amountInMicros: 296300000, currencyCode: 'INR' },
          },
        ],
      },
      accessInfo: {
        country: 'IN',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.in/books/download/The_Eye_Of_The_World-sample-epub.acsm?id=MXj0THxYdkMC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: { isAvailable: false },
        webReaderLink: 'http://play.google.com/books/reader?id=MXj0THxYdkMC&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
    };
  }
}
