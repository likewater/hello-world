import { Injectable } from '@angular/core';
import { Language } from './language.model';
import { LANGUAGES } from './mock-languages';

@Injectable()
export class LanguageService {

  constructor() { }

  getLanguages() {
    return LANGUAGES;
  }

  getLanguageById(languageId: number){
    for (var i = 0; i <= LANGUAGES.length - 1; i++) {
      if (LANGUAGES[i].id === languageId) {
        return LANGUAGES[i];
      }
    }
  }

}
