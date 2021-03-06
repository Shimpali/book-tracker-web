export const environment = {
  production: false,
  serverUrl: 'https://book-tracker-nestjs.herokuapp.com/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'es-ES', 'fr-FR'],
  googleBooksAPIUrl: 'https://www.googleapis.com/books/v1/volumes',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
