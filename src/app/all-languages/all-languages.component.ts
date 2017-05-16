import { Component, OnInit } from '@angular/core';
import { Language } from '../language.model';
import { LanguageService } from '../language.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-all-languages',
  templateUrl: './all-languages.component.html',
  styleUrls: ['./all-languages.component.css'],
  providers: [LanguageService]
})
export class AllLanguagesComponent implements OnInit {
  //languages: Language[];
  languages: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private languageService: LanguageService){}

  ngOnInit() {
    this.languages = this.languageService.getLanguages();
  }

  goToDetailPage(clickedLanguage) {
    //  this.router.navigate(['languages', clickedLanguage.id]);
    this.router.navigate(['languages', clickedLanguage.$key]);
   };

}
