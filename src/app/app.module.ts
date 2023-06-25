import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ApprenantComponent } from './components/apprenant/apprenant.component';
import { ActionComponent } from './components/action/action.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { JeuComponent } from './components/jeu/jeu.component';
import { MissionComponent } from './components/mission/mission.component';
import { ObjectifComponent } from './components/objectif/objectif.component';
import { ReglesComponent } from './components/regles/regles.component';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './shared/home/home.component';
import { AjouterApprenantComponent } from './components/apprenant/ajouter-apprenant/ajouter-apprenant.component';
import {ReactiveFormsModule} from "@angular/forms";
export const routes: Routes = [
  { path: 'action', component: ActionComponent },
  { path: 'apprenant', component: ApprenantComponent },
  { path: 'ajouterApprenant', component: AjouterApprenantComponent },
  { path: 'home', component: HomeComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'objectif', component: ObjectifComponent },
  { path: 'jeu', component: JeuComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ApprenantComponent,
    ActionComponent,
    AuthentificationComponent,
    JeuComponent,
    MissionComponent,
    ObjectifComponent,
    ReglesComponent,
    HomeComponent,
    AjouterApprenantComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
