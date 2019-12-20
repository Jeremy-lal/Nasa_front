import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarsInfoPageComponent } from './pages/mars-info-page/mars-info-page.component';
import { MarsMeteoPageComponent } from './pages/mars-meteo-page/mars-meteo-page.component';
import { MarsPhotoPageComponent } from './pages/mars-photo-page/mars-photo-page.component';
import { ForumPageComponent } from './pages/forum-page/forum-page.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { OpenCommentFormComponent } from './components/open-comment-form/open-comment-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from './components/comment/comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PersonneComponent } from './components/personne/personne.component';
import { ConnexionComponent } from './components/connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    MarsInfoPageComponent,
    MarsMeteoPageComponent,
    MarsPhotoPageComponent,
    ForumPageComponent,
    AcceuilComponent,
    NavBarComponent,
    CommentFormComponent,
    UserFormComponent,
    OpenCommentFormComponent,
    CommentComponent,
    NavTopComponent,
    AdminComponent,
    PersonneComponent,
    ConnexionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CommentFormComponent,
    ConnexionComponent
  ]
})
export class AppModule { }
