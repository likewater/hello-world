import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { Language } from '../language.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [LanguageService]
})
export class AdminComponent implements OnInit {

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

  submitForm(language: string, author: string, year: number, type: string, code: string, description: string, link: string) {
    var newLanguage: Language = new Language(language, author, year, type, code, description, link);
    this.languageService.addLanguage(newLanguage);
    // console.log(newLanguage);
  }

}
