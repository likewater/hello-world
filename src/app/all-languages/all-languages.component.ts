import { Component, OnInit } from '@angular/core';
import { Language } from '../language.model';
import { LanguageService } from '../language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-languages',
  templateUrl: './all-languages.component.html',
  styleUrls: ['./all-languages.component.css'],
  providers: [LanguageService]
})
export class AllLanguagesComponent implements OnInit {
  languages: Language[];

  constructor(private router: Router, private languageService: LanguageService){}

  // languages: Language[] = [
  //   new Language("Lisp", "John McCarthy", 1958, "Functional", "test", "Lisp (historically, LISP) is a family of computer programming languages with a long history and a distinctive, fully parenthesized prefix notation.[3] Originally specified in 1958, Lisp is the second-oldest high-level programming language in widespread use today. Only Fortran is older, by one year.[4][5] Lisp has changed since its early days, and many dialects have existed over its history. Today, the best known general-purpose Lisp dialects are Common Lisp and Scheme.", "test", 1),
  //   new Language("Fortran", "Jim Backus", 1957, "Functional", "test", "Fortran (formerly FORTRAN, derived from Formula Translation[2]) is a general-purpose, imperative programming language that is especially suited to numeric computation and scientific computing. Originally developed by IBM[3] in the 1950s for scientific and engineering applications, Fortran came to dominate this area of programming early on and has been in continuous use for over half a century in computationally intensive areas such as numerical weather prediction, finite element analysis, computational fluid dynamics, computational physics, crystallography and computational chemistry. It is a popular language for high-performance computing[4] and is used for programs that benchmark and rank the world's fastest supercomputers.", "test", 2)
  // ]
  ngOnInit() {
    this.languages = this.languageService.getLanguages();
  }

  goToDetailPage(clickedLanguage: Language) {
     this.router.navigate(['languages', clickedLanguage.id]);
   };

}
