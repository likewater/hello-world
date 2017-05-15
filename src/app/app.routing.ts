import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { AllLanguagesComponent } from './all-languages/all-languages.component';
import { LanguageDetailComponent } from './language-detail/language-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'all-languages',
    component: AllLanguagesComponent
  },
  {
    path: 'languages/:id',
    component: LanguageDetailComponent
  }



];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
