// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDaoJ8DrxM3Zi_c7xe0RFzs23onD7twjPg",
    authDomain: "venuetestphase.firebaseapp.com",
    databaseURL: "https://venuetestphase.firebaseio.com",
    projectId: "venuetestphase",
    storageBucket: "venuetestphase.appspot.com",
    messagingSenderId: "335625842452",
    appId: "1:335625842452:web:193cb5d70e19d08e7b9c01"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
