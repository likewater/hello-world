import { Injectable } from '@angular/core';
import { Language } from './language.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class LanguageService {
  languages: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.languages = database.list('languages');
  }

  getLanguages() {
    return this.languages;
  }

  addLanguage(newLanguage: Language) {
    this.languages.push(newLanguage);
  }

  getLanguageById(languageId: string){
    return this.database.object('languages/' + languageId);
  }

  updateLanguage(localUpdatedLanguage){
    var languageEntryInFirebase = this.getLanguageById(localUpdatedLanguage.$key);
    languageEntryInFirebase.update({language: localUpdatedLanguage.language,
                                author: localUpdatedLanguage.author,
                                year: localUpdatedLanguage.year,
                                type: localUpdatedLanguage.type,
                                code: localUpdatedLanguage.code,
                                description: localUpdatedLanguage.description,
                                link: localUpdatedLanguage.link});
  }

  deleteLanguage(localLanguageToDelete){
    var languageEntryInFirebase = this.getLanguageById(localLanguageToDelete.$key);
    languageEntryInFirebase.remove();
  }
}
