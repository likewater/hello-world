import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Language } from '../language.model';
import { LanguageService } from '../language.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.component.html',
  styleUrls: ['./language-detail.component.css'],
  providers: [LanguageService]
})
export class LanguageDetailComponent implements OnInit {
  languageId: string;
  languageToDisplay;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.languageId = urlParameters['id'];
   });
   this.languageToDisplay = this.languageService.getLanguageById(this.languageId);


    // this.route.params.forEach((urlParameters) => {
    //   this.languageId = parseInt(urlParameters['id']);
    // });
    // this.languageToDisplay = this.languageService.getLanguageById(this.languageId);
  }

}
