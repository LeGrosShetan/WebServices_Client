import {Component, OnInit} from '@angular/core';
import {ObjectifDto} from "../../shared/models/objectif-dto";
import {ObjectifService} from "../../shared/services/objectif.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-objectif',
  templateUrl: './objectif.component.html',
  styleUrls: ['./objectif.component.css']
})
export class ObjectifComponent implements OnInit{
  public objectifs : ObjectifDto[] = [];

  constructor(private objectifService : ObjectifService,
              private router : Router) {
  }

  ngOnInit() {
    this.objectifService.getObjectifs().subscribe((mesObjectifs) => this.objectifs = mesObjectifs);
  }

  accueil(): void{
    this.router.navigate(['/home'])
  }

  goToAction(numAction: number) {
    this.router.navigate(['/unAction', numAction])
  }

  goToObjectif(numObjectif : number) {
    this.router.navigate(['/unObjectif', numObjectif])
  }
}
