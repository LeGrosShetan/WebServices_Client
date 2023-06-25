import {Component, OnInit} from '@angular/core';
import {MissionService} from "../../shared/services/mission.service";
import {MissionDto} from "../../shared/models/mission-dto";

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit{
  public missions : MissionDto[] = [];

  constructor(private missionService : MissionService) {
  }

  ngOnInit() {
    this.missionService.getMissions().subscribe((mesMissions) => this.missions = mesMissions);
  }
}
