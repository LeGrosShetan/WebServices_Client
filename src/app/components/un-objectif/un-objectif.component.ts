import {Component, OnInit} from '@angular/core';
import {ObjectifService} from "../../shared/services/objectif.service";
import {ObjectifDto} from "../../shared/models/objectif-dto";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-un-objectif',
  templateUrl: './un-objectif.component.html',
  styleUrls: ['./un-objectif.component.css']
})
export class UnObjectifComponent implements OnInit{
  public id = 0;
  public objectif! : ObjectifDto;

  constructor(private objectifService : ObjectifService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void{
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.objectifService.getUnObjectif(this.id).subscribe((monObjectif) => this.objectif = monObjectif);
  }


  goToAction(actionId : number) {
    this.router.navigate(['/uneAction', actionId])
  }

  accueil() {
    this.router.navigate(['/home'])
  }
}
