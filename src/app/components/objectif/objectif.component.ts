import {Component, OnInit} from '@angular/core';
import {ObjectifDto} from "../../shared/models/objectif-dto";
import {ObjectifService} from "../../shared/services/objectif.service";

@Component({
  selector: 'app-objectif',
  templateUrl: './objectif.component.html',
  styleUrls: ['./objectif.component.css']
})
export class ObjectifComponent implements OnInit{
  public objectifs : ObjectifDto[] = [];

  constructor(private objectifService : ObjectifService) {
  }

  ngOnInit() {
    this.objectifService.getObjectifs().subscribe((mesObjectifs) => this.objectifs = mesObjectifs);
  }
}
