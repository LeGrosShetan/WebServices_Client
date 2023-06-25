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
import { ReactiveFormsModule } from "@angular/forms";
import { UnJeuComponent } from './components/un-jeu/un-jeu.component';
import { UneMissionComponent } from './components/une-mission/une-mission.component';
import { UnObjectifComponent } from './components/un-objectif/un-objectif.component';

export const routes: Routes = [
  { path: 'action', component: ActionComponent },
  { path: 'apprenant', component: ApprenantComponent },
  { path: 'ajouterApprenant', component: AjouterApprenantComponent },
  { path: 'home', component: HomeComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'objectif', component: ObjectifComponent },
  { path: 'jeu', component: JeuComponent },
  { path: 'unJeu/:id', component : UnJeuComponent},
  { path: 'unObjectif/:id', component : UnObjectifComponent},
  { path: 'uneMission/:id', component: UneMissionComponent}
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
    AjouterApprenantComponent,
    UnJeuComponent,
    UneMissionComponent,
    UnObjectifComponent
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
