import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { AllLanguagesComponent } from './all-languages/all-languages.component';
import { routing } from './app.routing';
import { LanguageDetailComponent } from './language-detail/language-detail.component';
import { TypePipe } from './type.pipe';

//added below for DB
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';
import { EditLanguageComponent } from './edit-language/edit-language.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};
//added above for DB

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    AllLanguagesComponent,
    LanguageDetailComponent,
    AdminComponent,
    EditLanguageComponent,
    TypePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
