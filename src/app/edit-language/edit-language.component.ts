import { Component, Input, OnInit } from '@angular/core';
// import { Language } from '../language.model;
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-edit-language',
  templateUrl: './edit-language.component.html',
  styleUrls: ['./edit-language.component.css'],
  providers: [LanguageService]
})
export class EditLanguageComponent implements OnInit {
  @Input() selectedLanguage;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

  beginUpdatingLanguage(languageToUpdate){
    this.languageService.updateLanguage(languageToUpdate);
  }

  beginDeletingLanguage(languageToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.languageService.deleteLanguage(languageToDelete);
    }
  }

}
