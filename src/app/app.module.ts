import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarsInfoPageComponent } from './pages/mars-info-page/mars-info-page.component';
import { MarsMeteoPageComponent } from './pages/mars-meteo-page/mars-meteo-page.component';
import { MarsPhotoPageComponent } from './pages/mars-photo-page/mars-photo-page.component';
import { ForumPageComponent } from './pages/forum-page/forum-page.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MarsInfoPageComponent,
    MarsMeteoPageComponent,
    MarsPhotoPageComponent,
    ForumPageComponent,
    AcceuilComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
