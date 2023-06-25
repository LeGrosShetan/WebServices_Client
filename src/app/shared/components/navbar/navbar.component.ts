import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationService} from "../../services/authentification.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router : Router,
              public authentificationService: AuthentificationService) {
  }

  deconnexion():void{
    this.authentificationService.utilisateur = undefined;
    this.authentificationService.connected = false;
  }

  accueil():void{
    this.router.navigate(['/home'])
  }

  login():void{
    this.router.navigate(['/authentification'])
  }

  mission():void{
    this.router.navigate(['/mission'])
  }

  jeu():void{
    this.router.navigate(['/jeu'])
  }

  action():void{
    this.router.navigate(['/action'])
  }

  ajoutApprenant():void{
    this.router.navigate(['/ajouterApprenant'])
  }

  apprenant():void{
    this.router.navigate(['/apprenant'])
  }
}
