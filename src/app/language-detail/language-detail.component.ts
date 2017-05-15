import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Language } from '../language.model';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.component.html',
  styleUrls: ['./language-detail.component.css'],
  providers: [LanguageService]
})
export class LanguageDetailComponent implements OnInit {
  languageId: number = null;//null?
  languageToDisplay: Language;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.languageId = parseInt(urlParameters['id']);
    });
    this.languageToDisplay = this.languageService.getLanguageById(this.languageId);
  }

}
