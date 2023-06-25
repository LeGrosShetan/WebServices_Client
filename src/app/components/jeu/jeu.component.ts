import {Component, OnInit} from '@angular/core';
import {JeuService} from "../../shared/services/jeu.service";
import {JeuDto} from "../../shared/models/jeu-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit{
  public jeux : JeuDto[] = [];

  constructor(private jeuService : JeuService,
              private router : Router) {
  }

  ngOnInit() {
    this.jeuService.getJeux().subscribe((mesJeux:JeuDto[]) => {
      this.jeux = mesJeux
    })
  }

  goToMission(missionId : number) {
    this.router.navigate(["/uneMission", missionId])
  }

  goToJeu(jeuId : number) {
    this.router.navigate(["/unJeu", jeuId])
  }

  accueil():void {
    this.router.navigate(['/home'])
  }
}
