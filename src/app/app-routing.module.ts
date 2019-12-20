import { ForumPageComponent } from './pages/forum-page/forum-page.component';
import { MarsPhotoPageComponent } from './pages/mars-photo-page/mars-photo-page.component';
import { MarsMeteoPageComponent } from './pages/mars-meteo-page/mars-meteo-page.component';
import { MarsInfoPageComponent } from './pages/mars-info-page/mars-info-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AdminComponent } from './pages/admin/admin.component';


const routes: Routes = [
  { path: '', component: AcceuilComponent},
  { path: 'info', component: MarsInfoPageComponent},
  { path: 'meteo', component: MarsMeteoPageComponent},
  { path: 'photo', component: MarsPhotoPageComponent},
  { path: 'forum', component: ForumPageComponent},
  { path: 'admin', component: AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
