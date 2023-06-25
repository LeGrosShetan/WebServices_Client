import {Component, OnInit} from '@angular/core';
import {JeuService} from "../../shared/services/jeu.service";
import {JeuDto} from "../../shared/models/jeu-dto";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-un-jeu',
  templateUrl: './un-jeu.component.html',
  styleUrls: ['./un-jeu.component.css']
})
export class UnJeuComponent implements OnInit{
  public id = 0;
  public jeu! : JeuDto;
  constructor(private jeuService : JeuService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.jeuService.getUnJeu(this.id).subscribe((monJeu) => this.jeu = monJeu)
  }

  goToMission(missionId : number) {
    this.router.navigate(["/uneMission", missionId])
  }

  accueil():void {
    this.router.navigate(['/home'])
  }
}
