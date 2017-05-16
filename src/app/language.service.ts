import { Injectable } from '@angular/core';
import { Language } from './language.model';
// import { LANGUAGES } from './mock-languages';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class LanguageService {
  languages: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.languages = database.list('languages');
  }

  getLanguages() {
    //return LANGUAGES;
    return this.languages;
  }

  addLanguage(newLanguage: Language) {
    this.languages.push(newLanguage);
  }

  getLanguageById(languageId: string){
    return this.database.object('languages/' + languageId);
    // for (var i = 0; i <= LANGUAGES.length - 1; i++) {
    //   if (LANGUAGES[i].id === languageId) {
    //     return LANGUAGES[i];
    //   }
    // }
  }

}
