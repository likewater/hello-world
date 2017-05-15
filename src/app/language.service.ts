import { Injectable } from '@angular/core';
import { Language } from './language.model';
import { LANGUAGES } from './mock-languages';

@Injectable()
export class LanguageService {

  constructor() { }

  getLanguages() {
    return LANGUAGES;
  }

}
