import {Component, OnInit} from '@angular/core';
import {MissionService} from "../../shared/services/mission.service";
import {MissionDto} from "../../shared/models/mission-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit{
  public missions : MissionDto[] = [];

  constructor(private missionService : MissionService,
              private router : Router) {
  }

  ngOnInit() {
    this.missionService.getMissions().subscribe((mesMissions) => this.missions = mesMissions);
  }

  accueil(): void{
    this.router.navigate(['/home'])
  }

  goToMission(numMission: number) {
    this.router.navigate(['/uneMission', numMission])
  }

  goToObjectif(numObjectif : number) {
    this.router.navigate(['/unObjectif', numObjectif])
  }
}
