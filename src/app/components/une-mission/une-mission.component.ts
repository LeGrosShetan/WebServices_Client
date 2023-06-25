import {Component, OnInit} from '@angular/core';
import {MissionDto} from "../../shared/models/mission-dto";
import {MissionService} from "../../shared/services/mission.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-une-mission',
  templateUrl: './une-mission.component.html',
  styleUrls: ['./une-mission.component.css']
})
export class UneMissionComponent implements OnInit{
  public id = 0;
  public mission! : MissionDto;
  constructor(private missionService : MissionService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.missionService.getUneMission(this.id).subscribe((maMission) => this.mission = maMission)
  }

  goToObjectif(objectifId : number) {
    this.router.navigate(["/unObjectif", objectifId])
  }

  accueil():void {
    this.router.navigate(['/home'])
  }
}
