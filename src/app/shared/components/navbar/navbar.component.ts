import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router : Router) {
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
