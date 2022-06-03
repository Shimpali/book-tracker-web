import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, finalize } from 'rxjs/operators';

import { GoogleBook } from '@core/models';
import { GoogleBooksService } from './google-books.service';

@UntilDestroy()
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: any[] = [
    {
      kind: 'books#volume',
      id: 'jDs6AyDD934C',
      etag: 'zWFOQjvOlok',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/jDs6AyDD934C',
      volumeInfo: {
        title: 'The Wheel of Time, Boxed Set II, Books 4-6',
        subtitle: 'The Shadow Rising, The Fires of Heaven, Lord of Chaos',
        authors: ['Robert Jordan'],
        publisher: 'Macmillan',
        publishedDate: '1997-11-15',
        description:
          "Boxed Set contains Mass Market Paperback editions of The Shadow Rising, The Fires of Heaven, and Lord of Chaos, books four through six of Robert Jordan's The Wheel of Time series. The Shadow Rising The seals of Shayol Ghul are weak now, and the Dark One reaches out. The Shadow is rising to cover humankind. In Tar Valon, Min sees portents of hideous doom. Will the White Tower itself be broken? In the Two Rivers, the Whitecloaks ride in pursuit of a man with golden eyes, and in pursuit of the Dragon Reborn. In Cantorin, among the Sea Folk, High Lady Suroth plans the return of the Seanchan armies to the mainland. In the Stone of Tear, the Lord Dragon considers his next move. It will be something no one expects, not the Black Ajah, not Tairen nobles, not Aes Sedai, not Egwene or Elayne or Nynaeve. Against the Shadow rising stands the Dragon Reborn..... The Fires of Heaven In this sequel to the phenomenal New York Times bestseller The Shadow Rising, Robert Jordan again plunges us into his extraordinarily rich, totally unforgettable world: ...Into the forbidden city of Rhuidean, where Rand al'Thor, now the Dragon Reborn, must conceal his present endeavor from all about him, even Egwene and Moiraine. ...Into the Amyrlin's study in the White Tower, where the Amyrlin, Elaida do Avriny a'Roihan, is weaving new plans. ...Into the luxurious hidden chamber where the Forsaken Rahvin is meeting with three of his fellows to ensure their ultimate victory over the Dragon. ...Into the Queen's court in Caemlyn, where Morgase is curiously in thrall to the handsome Lord Gaebril. For once the dragon walks the land, the fires of heaven fall where they will, until all men's lives are ablaze. And in Shayol Ghul, the Dark One stirs... Lord of Chaos In this sequel to the phenomenal New York Times bestseller The Fires of Heaven, we plunge again into Robert Jordan's extraordinarily rich, totally unforgettable world: On the slopes of Shayol Ghul, the Myrddraal swords are forged, and the sky is not the sky of this world; In Salidar the White Tower in exile prepares an embassy to Caemlyn, where Rand Al'Thor, the Dragon Reborn, holds the throne--and where an unexpected visitor may change the world.... In Emond's Field, Perrin Goldeneyes, Lord of the Two Rivers, feels the pull of ta'veren to ta'veren and prepares to march.... Morgase of Caemlyn finds a most unexpected, and quite unwelcome, ally....And south lies Illian, where Sammael holds sway....",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780812540116',
          },
          {
            type: 'ISBN_10',
            identifier: '0812540115',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        printType: 'BOOK',
        categories: ['Fiction'],
        averageRating: 4.5,
        ratingsCount: 4,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.1.0.0.preview.0',
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=jDs6AyDD934C&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=jDs6AyDD934C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'en',
        previewLink: 'http://books.google.co.in/books?id=jDs6AyDD934C&dq=wheel+of+time&hl=&cd=1&source=gbs_api',
        infoLink: 'http://books.google.co.in/books?id=jDs6AyDD934C&dq=wheel+of+time&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/The_Wheel_of_Time_Boxed_Set_II_Books_4_6.html?hl=&id=jDs6AyDD934C',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IN',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=jDs6AyDD934C&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Boxed Set contains Mass Market Paperback editions of The Shadow Rising, The Fires of Heaven,and Lord of Chaos, books four through six of Robert Jordan&#39;s The Wheel of Time series.',
      },
    },
    {
      kind: 'books#volume',
      id: 'MXj0THxYdkMC',
      etag: 'R6CI/yxR9+0',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/MXj0THxYdkMC',
      volumeInfo: {
        title: 'The Eye Of The World',
        subtitle: 'Book 1 of the Wheel of Time (Now a major TV series)',
        authors: ['Robert Jordan'],
        publisher: 'Hachette UK',
        publishedDate: '2009-10-27',
        description:
          "Now a major TV series on Prime Video Prepare to turn the Wheel of Time - discover the first novel in one of the most influential and popular fantasy epics ever published. When their village is attacked by terrifying creatures, Rand al'Thor and his friends are forced to flee for their lives. An ancient evil is stirring, and its servants are scouring the land for the Dragon Reborn - the prophesised hero who can deliver the world from darkness. In this Age of myth and legend, the Wheel of Time turns. What was, what may be, and what is, may yet fall under the Shadow. ONE OF TIME MAGAZINE'S TOP 100 FANTASY BOOKS OF ALL TIME 'Epic in every sense' - Sunday Times 'With the Wheel of Time, Jordan has come to dominate the world that Tolkien began to reveal' New York Times '[The] huge ambitious Wheel of Time series helped redefine the genre' George R. R. Martin 'A fantasy phenomenon' SFX The Wheel of Time series: Book 1: The Eye of the World Book 2: The Great Hunt Book 3: The Dragon Reborn Book 4: The Shadow Rising Book 5: The Fires of Heaven Book 6: Lord of Chaos Book 7: A Crown of Swords Book 8: The Path of Daggers Book 9: Winter's Heart Book 10: Crossroads of Twilight Book 11: Knife of Dreams Book 12: The Gathering Storm Book 13: Towers of Midnight Book 14: A Memory of Light Prequel: New Spring Look out for the companion book: The World of Robert Jordan's The Wheel of Time",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780748115341',
          },
          {
            type: 'ISBN_10',
            identifier: '074811534X',
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 832,
        printType: 'BOOK',
        categories: ['Fiction'],
        averageRating: 4,
        ratingsCount: 218,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '0.17.15.0.preview.2',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=MXj0THxYdkMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=MXj0THxYdkMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=MXj0THxYdkMC&printsec=frontcover&dq=wheel+of+time&hl=&cd=2&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=MXj0THxYdkMC&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=MXj0THxYdkMC',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 531,
          currencyCode: 'INR',
        },
        retailPrice: {
          amount: 296.3,
          currencyCode: 'INR',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=MXj0THxYdkMC&rdid=book-MXj0THxYdkMC&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 531000000,
              currencyCode: 'INR',
            },
            retailPrice: {
              amountInMicros: 296300000,
              currencyCode: 'INR',
            },
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
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=MXj0THxYdkMC&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'ONE OF TIME MAGAZINE&#39;S TOP 100 FANTASY BOOKS OF ALL TIME &#39;Epic in every sense&#39; - Sunday Times &#39;With the Wheel of Time, Jordan has come to dominate the world that Tolkien began to reveal&#39; New York Times &#39;[The] huge ambitious Wheel of Time ...',
      },
    },
    {
      kind: 'books#volume',
      id: 'madjEAAAQBAJ',
      etag: 'OWa0xOZ4yfo',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/madjEAAAQBAJ',
      volumeInfo: {
        title: 'The Complete Wheel of Time',
        subtitle: 'The ebook collection of all 15 books in The Wheel of Time',
        authors: ['Robert Jordan', 'Brandon Sanderson'],
        publisher: 'Hachette UK',
        publishedDate: '2022-04-21',
        description:
          "This complete ebook collection contains all fifteen books in the Wheel of Time series: one the most influential and popular fantasy epics ever published. NOW A MAJOR TV SERIES ON PRIME VIDEO When their village is attacked by terrifying creatures, Rand al'Thor and his friends are forced to flee for their lives. An ancient evil is stirring, and its servants are scouring the land for the Dragon Reborn - the prophesised hero who can deliver the world from darkness. In this Age of myth and legend, the Wheel of Time turns. What was, what may be, and what is, may yet fall under the Shadow. This complete Wheel of Time ebook collection includes: Book 1: The Eye of the World Book 2: The Great Hunt Book 3: The Dragon Reborn Book 4: The Shadow Rising Book 5: The Fires of Heaven Book 6: Lord of Chaos Book 7: A Crown of Swords Book 8: The Path of Daggers Book 9: Winter's Heart Book 10: Crossroads of Twilight Book 11: Knife of Dreams Book 12: The Gathering Storm Book 13: Towers of Midnight Book 14: A Memory of Light Prequel: New Spring 'EPIC IN EVERY SENSE' Sunday Times 'WITH THE WHEEL OF TIME, JORDAN HAS COME TO DOMINATE THE WORLD THAT TOLKIEN BEGAN TO REVEAL' New York Times '[THE] AMBITIOUS WHEEL OF TIME SERIES HELPED REDEFINE THE GENRE' George R. R. Martin 'A FANTASY PHENOMENON' SFX Look out for the companion book: The World of Robert Jordan's The Wheel of Time",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780356519623',
          },
          {
            type: 'ISBN_10',
            identifier: '0356519627',
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 18831,
        printType: 'BOOK',
        categories: ['Fiction'],
        averageRating: 3,
        ratingsCount: 2,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '1.4.4.0.preview.2',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=madjEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=madjEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=madjEAAAQBAJ&printsec=frontcover&dq=wheel+of+time&hl=&cd=3&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=madjEAAAQBAJ&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=madjEAAAQBAJ',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 8372.1,
          currencyCode: 'INR',
        },
        retailPrice: {
          amount: 8372.1,
          currencyCode: 'INR',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=madjEAAAQBAJ&rdid=book-madjEAAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 8372100000,
              currencyCode: 'INR',
            },
            retailPrice: {
              amountInMicros: 8372100000,
              currencyCode: 'INR',
            },
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
            'http://books.google.co.in/books/download/The_Complete_Wheel_of_Time-sample-epub.acsm?id=madjEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=madjEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'This complete ebook collection contains all fifteen books in the Wheel of Time series: one the most influential and popular fantasy epics ever published.',
      },
    },
    {
      kind: 'books#volume',
      id: '1aSxXNOCn_8C',
      etag: 'gGUVp0t05Dc',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/1aSxXNOCn_8C',
      volumeInfo: {
        title: 'A Memory Of Light',
        subtitle: 'Book 14 of the Wheel of Time (soon to be a major TV series)',
        authors: ['Robert Jordan', 'Brandon Sanderson'],
        publisher: 'Hachette UK',
        publishedDate: '2013-04-09',
        description:
          "Soon to be a major Amazon Prime TV series The final novel in the Wheel of Time series - one of the most influential and popular fantasy epics ever published. 'And it came to pass in those days, as it had come before and would come again, that the Dark lay heavy on the land and weighed down the hearts of men, and the green things failed, and hope died.' - Charal Drianaan te Calamon, The Cycle of the Dragon. In the Field of Merrilor the rulers of the nations gather to join behind Rand al'Thor, or to stop him from his plan to break the seals on the Dark One's prison - which may be a sign of his madness, or the last hope of humankind. Egwene, the Amyrlin Seat, leans toward the former. In Andor, the Trollocs seize Caemlyn. In the wolf dream, Perrin Aybara battles Slayer. Approaching Ebou Dar, Mat Cauthon plans to visit his wife Tuon, now Fortuona, Empress of the Seanchan. All humanity is in peril - and the outcome will be decided in Shayol Ghul itself. The Wheel is turning, and the Age is coming to its end. The Last Battle will determine the fate of the world . . . 'Epic in every sense' Sunday Times 'With the Wheel of Time, Jordan has come to dominate the world that Tolkien began to reveal' New York Times '[The] huge ambitious Wheel of Time series helped redefine the genre' George R. R. Martin 'A fantasy phenomenon' SFX The Wheel of Time The Eye of the World The Great Hunt The Dragon Reborn The Shadow Rising The Fires of Heaven Lord of Chaos A Crown of Swords The Path of Daggers Winter's Heart Crossroads of Twilight Knife of Dreams The Gathering Storm Towers of Midnight A Memory of Light New Spring (prequel) The Wheel of Time Companion",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780748117222',
          },
          {
            type: 'ISBN_10',
            identifier: '0748117229',
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 768,
        printType: 'BOOK',
        categories: ['Fiction'],
        averageRating: 4.5,
        ratingsCount: 3,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '1.9.10.0.preview.2',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=1aSxXNOCn_8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=1aSxXNOCn_8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=1aSxXNOCn_8C&printsec=frontcover&dq=wheel+of+time&hl=&cd=4&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=1aSxXNOCn_8C&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=1aSxXNOCn_8C',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 531,
          currencyCode: 'INR',
        },
        retailPrice: {
          amount: 299,
          currencyCode: 'INR',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=1aSxXNOCn_8C&rdid=book-1aSxXNOCn_8C&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 531000000,
              currencyCode: 'INR',
            },
            retailPrice: {
              amountInMicros: 299000000,
              currencyCode: 'INR',
            },
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
            'http://books.google.co.in/books/download/A_Memory_Of_Light-sample-epub.acsm?id=1aSxXNOCn_8C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=1aSxXNOCn_8C&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '&#39;Epic in every sense&#39; Sunday Times &#39;With the Wheel of Time, Jordan has come to dominate the world that Tolkien began to reveal&#39; New York Times &#39;[The] huge ambitious Wheel of Time series helped redefine the genre&#39; George R. R. Martin &#39;A ...',
      },
    },
    {
      kind: 'books#volume',
      id: '_LEJuAAACAAJ',
      etag: 'Zzd4YRPC0Ic',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/_LEJuAAACAAJ',
      volumeInfo: {
        title: 'The Great Hunt',
        subtitle: "Book Two of 'The Wheel of Time'",
        authors: ['Robert Jordan'],
        publisher: 'Tor Books',
        publishedDate: '2012-06-05',
        description:
          "Soon to be an original series starring Rosamund Pike as Moiraine! Robert Jordan’s #1 New York Times bestselling epic fantasy series, The Wheel of Time®, continues as Rand al’Thor and his companions set out to retrieve a powerful magical artifact from The Dark One’s Shadowspawn in The Great Hunt. For centuries, gleemen have told the tales of The Great Hunt of the Horn. So many tales about each of the Hunters, and so many Hunters to tell of... Now the Horn itself is found: the Horn of Valere long thought only legend, the Horn which will raise the dead heroes of the ages. And it is stolen. In pursuit of the thieves, Rand al’Thor is determined to keep the Horn out of the grasp of The Dark One. But he has also learned that he is The Dragon Reborn—the Champion of Light destined to stand against the Shadow time and again. It is a duty and a destiny that requires Rand to uncover and master magical capabilities he never imagined he possessed. Since its debut in 1990, The Wheel of Time® has captivated millions of readers around the globe with its scope, originality, and compelling characters. The last six books in series were all instant #1 New York Times bestsellers, and The Eye of the World was named one of America's best-loved novels by PBS's The Great American Read.The Wheel of Time® New Spring: The Novel #1 The Eye of the World #2 The Great Hunt #3 The Dragon Reborn #4 The Shadow Rising #5 The Fires of Heaven #6 Lord of Chaos #7 A Crown of Swords #8 The Path of Daggers #9 Winter's Heart #10 Crossroads of Twilight #11 Knife of Dreams By Robert Jordan and Brandon Sanderson #12 The Gathering Storm #13 Towers of Midnight #14 A Memory of Light By Robert Jordan Warrior of the Altaii By Robert Jordan and Teresa Patterson The World of Robert Jordan's The Wheel of Time By Robert Jordan, Harriet McDougal, Alan Romanczuk, and Maria Simons The Wheel of Time Companion By Robert Jordan and Amy Romanczuk Patterns of the Wheel: Coloring Art Based on Robert Jordan's The Wheel of Time",
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '0765334348',
          },
          {
            type: 'ISBN_13',
            identifier: '9780765334343',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 672,
        printType: 'BOOK',
        categories: ['Fiction'],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=_LEJuAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=_LEJuAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'en',
        previewLink: 'http://books.google.co.in/books?id=_LEJuAAACAAJ&dq=wheel+of+time&hl=&cd=5&source=gbs_api',
        infoLink: 'http://books.google.co.in/books?id=_LEJuAAACAAJ&dq=wheel+of+time&hl=&source=gbs_api',
        canonicalVolumeLink: 'https://books.google.com/books/about/The_Great_Hunt.html?hl=&id=_LEJuAAACAAJ',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IN',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=_LEJuAAACAAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'The Wheel of Time® New Spring: The Novel #1 The Eye of the World #2 The Great Hunt #3 The Dragon Reborn #4 The Shadow Rising #5 The Fires of Heaven #6 Lord of Chaos #7 A Crown of Swords #8 The Path of Daggers #9 Winter&#39;s Heart #10 ...',
      },
    },
    {
      kind: 'books#volume',
      id: 'oEHN8kUmomwC',
      etag: 'UHn9HagsdQA',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/oEHN8kUmomwC',
      volumeInfo: {
        title: 'The Great Hunt',
        subtitle: 'Book 2 of the Wheel of Time (soon to be a major TV series)',
        authors: ['Robert Jordan'],
        publisher: 'Hachette UK',
        publishedDate: '2009-11-17',
        description:
          "SOON TO BE A MAJOR AMAZON PRIME TV SERIES The second novel in the Wheel of Time series - one of the most influential and popular fantasy epics ever published. The Forsaken are loose, the Horn of Valere has been found and the Dead are rising from their dreamless sleep. The Prophecies are being fulfilled - but Rand al'Thor, the shepherd the Aes Sedai have proclaimed as the Dragon Reborn, desperately seeks to escape his destiny. Rand cannot run for ever. With every passing day the Dark One grows in strength and strives to shatter his ancient prison, to break the Wheel, to bring an end to Time and sunder the weave of the Pattern. And the Pattern demands the Dragon. 'Epic in every sense' Sunday Times 'With the Wheel of Time, Jordan has come to dominate the world that Tolkien began to reveal' New York Times '[The] huge ambitious Wheel of Time series helped redefine the genre' George R. R. Martin 'A fantasy phenomenon' SFX",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780748115358',
          },
          {
            type: 'ISBN_10',
            identifier: '0748115358',
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 736,
        printType: 'BOOK',
        categories: ['Fiction'],
        averageRating: 4,
        ratingsCount: 62,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '1.15.12.0.preview.2',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=oEHN8kUmomwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=oEHN8kUmomwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=oEHN8kUmomwC&printsec=frontcover&dq=wheel+of+time&hl=&cd=6&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=oEHN8kUmomwC&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=oEHN8kUmomwC',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 531,
          currencyCode: 'INR',
        },
        retailPrice: {
          amount: 175.23,
          currencyCode: 'INR',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=oEHN8kUmomwC&rdid=book-oEHN8kUmomwC&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 531000000,
              currencyCode: 'INR',
            },
            retailPrice: {
              amountInMicros: 175230000,
              currencyCode: 'INR',
            },
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
            'http://books.google.co.in/books/download/The_Great_Hunt-sample-epub.acsm?id=oEHN8kUmomwC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=oEHN8kUmomwC&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '&#39;Epic in every sense&#39; Sunday Times &#39;With the Wheel of Time, Jordan has come to dominate the world that Tolkien began to reveal&#39; New York Times &#39;[The] huge ambitious Wheel of Time series helped redefine the genre&#39; George R. R. Martin &#39;A ...',
      },
    },
    {
      kind: 'books#volume',
      id: 'h_ZPDadh_l4C',
      etag: 'SheDe+SQG98',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/h_ZPDadh_l4C',
      volumeInfo: {
        title: 'Towers Of Midnight',
        subtitle: 'Book 13 of the Wheel of Time (soon to be a major TV series)',
        authors: ['Robert Jordan', 'Brandon Sanderson'],
        publisher: 'Hachette UK',
        publishedDate: '2011-01-31',
        description:
          "Soon to be a major Amazon Prime TV series The thirteenth novel in the Wheel of Time series - one of the most influential and popular fantasy epics ever published. The Last Battle has started. The seals on the Dark One's prison are crumbling. The Pattern itself is unravelling, and the armies of the Shadow have begun to spill out of the Blight. Perrin Aybara is haunted by spectres from his past. To prevail, he must find a way to master the wolf within him or lose himself to it for ever. Meanwhile, Matrim Cauthon prepares for the most difficult challenge of his life. The Tower of Ghenjei awaits, and its secrets will reveal the fate of a friend long lost. The end draws near. It's time to roll the dice. 'Epic in every sense' Sunday Times 'With the Wheel of Time, Jordan has come to dominate the world that Tolkien began to reveal' New York Times '[The] huge ambitious Wheel of Time series helped redefine the genre' George R. R. Martin 'A fantasy phenomenon' SFX The Wheel of Time The Eye of the World The Great Hunt The Dragon Reborn The Shadow Rising The Fires of Heaven Lord of Chaos A Crown of Swords The Path of Daggers Winter's Heart Crossroads of Twilight Knife of Dreams The Gathering Storm Towers of Midnight A Memory of Light New Spring (prequel) The Wheel of Time Companion",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780748117215',
          },
          {
            type: 'ISBN_10',
            identifier: '0748117210',
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 976,
        printType: 'BOOK',
        categories: ['Fiction'],
        averageRating: 4.5,
        ratingsCount: 15,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '1.12.10.0.preview.2',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=h_ZPDadh_l4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=h_ZPDadh_l4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=h_ZPDadh_l4C&printsec=frontcover&dq=wheel+of+time&hl=&cd=7&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=h_ZPDadh_l4C&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=h_ZPDadh_l4C',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 531,
          currencyCode: 'INR',
        },
        retailPrice: {
          amount: 256.79,
          currencyCode: 'INR',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=h_ZPDadh_l4C&rdid=book-h_ZPDadh_l4C&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 531000000,
              currencyCode: 'INR',
            },
            retailPrice: {
              amountInMicros: 256790000,
              currencyCode: 'INR',
            },
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
            'http://books.google.co.in/books/download/Towers_Of_Midnight-sample-epub.acsm?id=h_ZPDadh_l4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=h_ZPDadh_l4C&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '&#39;Epic in every sense&#39; Sunday Times &#39;With the Wheel of Time, Jordan has come to dominate the world that Tolkien began to reveal&#39; New York Times &#39;[The] huge ambitious Wheel of Time series helped redefine the genre&#39; George R. R. Martin &#39;A ...',
      },
    },
    {
      kind: 'books#volume',
      id: 'z-UeCgAAQBAJ',
      etag: 'bNcY7vYkjk0',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/z-UeCgAAQBAJ',
      volumeInfo: {
        title: 'The Wheel of Time Companion',
        authors: ['Robert Jordan', 'Harriet McDougal', 'Alan Romanczuk', 'Maria Simons'],
        publisher: 'Hachette UK',
        publishedDate: '2015-11-05',
        description:
          "Since its debut in 1990, Robert Jordan's Wheel of Time series has captivated millions of readers around the world. Over the course of fifteen books and millions of words, Jordan created a rich and detailed world. Yet only a fraction of Jordan's imaginings ended up on the page, with the rest going into his personal files. The Wheel of Time Companion finally reveals a wealth of previously-unreleased information about the world of the Wheel of Time, as well as expanding on many known details. It is unmissable reading for fans of this bestselling series.",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780356506159',
          },
          {
            type: 'ISBN_10',
            identifier: '0356506150',
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 816,
        printType: 'BOOK',
        categories: ['Fiction'],
        averageRating: 3.5,
        ratingsCount: 3,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '1.3.4.0.preview.2',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=z-UeCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=z-UeCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=z-UeCgAAQBAJ&printsec=frontcover&dq=wheel+of+time&hl=&cd=8&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=z-UeCgAAQBAJ&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=z-UeCgAAQBAJ',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 997.1,
          currencyCode: 'INR',
        },
        retailPrice: {
          amount: 498.55,
          currencyCode: 'INR',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=z-UeCgAAQBAJ&rdid=book-z-UeCgAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 997100000,
              currencyCode: 'INR',
            },
            retailPrice: {
              amountInMicros: 498550000,
              currencyCode: 'INR',
            },
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
            'http://books.google.co.in/books/download/The_Wheel_of_Time_Companion-sample-epub.acsm?id=z-UeCgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=z-UeCgAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'The Wheel of Time Companion finally reveals a wealth of previously-unreleased information about the world of the Wheel of Time, as well as expanding on many known details. It is unmissable reading for fans of this bestselling series.',
      },
    },
    {
      kind: 'books#volume',
      id: '3Eb0wQEACAAJ',
      etag: 'mFRKoPvCKns',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/3Eb0wQEACAAJ',
      volumeInfo: {
        title: 'The Wheel of Time Premium Box Set I, Books 1-3',
        subtitle: 'The Eye of the World / The Great Hunt / The Dragon Reborn',
        authors: ['Robert Jordan'],
        publisher: 'Tor Books',
        publishedDate: '2019-12',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '1250251516',
          },
          {
            type: 'ISBN_13',
            identifier: '9781250251510',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 2272,
        printType: 'BOOK',
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=3Eb0wQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=3Eb0wQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'en',
        previewLink: 'http://books.google.co.in/books?id=3Eb0wQEACAAJ&dq=wheel+of+time&hl=&cd=9&source=gbs_api',
        infoLink: 'http://books.google.co.in/books?id=3Eb0wQEACAAJ&dq=wheel+of+time&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/The_Wheel_of_Time_Premium_Box_Set_I_Book.html?hl=&id=3Eb0wQEACAAJ',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IN',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=3Eb0wQEACAAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'The Wheel of Time Premium Boxed Set I contains: Book One: The Eye of the World Book Two: The Great Hunt Book Three: The Dragon Reborn *** The Wheel of Time(R) New Spring: The Novel #1 The Eye of the World #2 The Great Hunt #3 The Dragon ...',
      },
    },
    {
      kind: 'books#volume',
      id: 'RKTlHvspRZ0C',
      etag: 'lkhO7W9kT6s',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/RKTlHvspRZ0C',
      volumeInfo: {
        title: 'Crossroads Of Twilight',
        subtitle: 'Book 10 of the Wheel of Time (soon to be a major TV series)',
        authors: ['Robert Jordan'],
        publisher: 'Hachette UK',
        publishedDate: '2010-07-20',
        description:
          "Soon to be a major Amazon Prime TV series The tenth novel in the Wheel of Time series - one of the most influential and popular fantasy epics ever published. Fleeing from Ebou Dar with the kidnapped Daughter of the Nine Moons, Mat Cauthon learns that he can neither keep her nor let her go, for both the Shadow and the might of the Seanchan empire are now in deadly pursuit. At Tar Valon, Egwene al'Vere lays siege to the White Tower. She must win quickly, with as little bloodshed as possible, for unless the Aes Sedai are reunited only the male Asha'man will remain to defend the world against the Dark One. Meanwhile, Rand al'Thor must gamble again, with himself at stake - not knowing which of his allies are really enemies. 'Epic in every sense' Sunday Times 'With the Wheel of Time, Jordan has come to dominate the world that Tolkien began to reveal' New York Times '[The] huge ambitious Wheel of Time series helped redefine the genre' George R. R. Martin 'A fantasy phenomenon' SFX The Wheel of Time The Eye of the World The Great Hunt The Dragon Reborn The Shadow Rising The Fires of Heaven Lord of Chaos A Crown of Swords The Path of Daggers Winter's Heart Crossroads of Twilight Knife of Dreams The Gathering Storm Towers of Midnight A Memory of Light New Spring (prequel) The Wheel of Time Companion",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780748115433',
          },
          {
            type: 'ISBN_10',
            identifier: '0748115439',
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 832,
        printType: 'BOOK',
        categories: ['Fiction'],
        averageRating: 2.5,
        ratingsCount: 30,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '1.17.15.0.preview.2',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=RKTlHvspRZ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=RKTlHvspRZ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=RKTlHvspRZ0C&printsec=frontcover&dq=wheel+of+time&hl=&cd=10&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=RKTlHvspRZ0C&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=RKTlHvspRZ0C',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 531,
          currencyCode: 'INR',
        },
        retailPrice: {
          amount: 265.5,
          currencyCode: 'INR',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=RKTlHvspRZ0C&rdid=book-RKTlHvspRZ0C&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 531000000,
              currencyCode: 'INR',
            },
            retailPrice: {
              amountInMicros: 265500000,
              currencyCode: 'INR',
            },
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
            'http://books.google.co.in/books/download/Crossroads_Of_Twilight-sample-epub.acsm?id=RKTlHvspRZ0C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=RKTlHvspRZ0C&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '&#39;Epic in every sense&#39; Sunday Times &#39;With the Wheel of Time, Jordan has come to dominate the world that Tolkien began to reveal&#39; New York Times &#39;[The] huge ambitious Wheel of Time series helped redefine the genre&#39; George R. R. Martin &#39;A ...',
      },
    },
  ];
  search: FormControl = new FormControl<string | null>(null);
  apiQueryParams = {
    q: null,
    startIndex: 0,
    maxResults: 10,
  };
  isLoading = false;

  constructor(private googleBooksService: GoogleBooksService) {}

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      this.apiQueryParams.q = value;
      this.getGoogleBooks();
    });
  }

  getGoogleBooks() {
    this.isLoading = true;
    this.googleBooksService
      .get('', this.apiQueryParams)
      .pipe(
        finalize(() => (this.isLoading = false)),
        untilDestroyed(this)
      )
      .subscribe((books: any) => {
        if (!this.apiQueryParams.startIndex) {
          this.books = books?.items as GoogleBook[];
        } else {
          this.books = [...this.books, ...(books?.items as GoogleBook[])];
        }
      });
  }

  loadNextBatch(event: boolean): void {
    if (event) {
      this.apiQueryParams.startIndex += this.apiQueryParams.maxResults;
      this.getGoogleBooks();
    }
  }
}
