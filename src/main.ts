import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/AppModule';
//import './topics.ts/01-basic-types';
//import './topics.ts/02-object-interface'
//import './topics.ts/03-functions'
//import './topics.ts/04-homework-types';
//import './topics.ts/05-basic-destructuring';
//import './topics.ts/06-function-destrugturing';
//import './topics.ts/07-import-export';
//import './topics.ts/08-classes';
//import './topics.ts/09-generics';
//import './topics.ts/10-decorators';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
