import {Component, OnInit} from '@angular/core';
import {ApprenantService} from "../../shared/services/apprenant.service";
import {ApprenantDto} from "../../shared/models/apprenant-dto";

@Component({
  selector: 'app-apprenant',
  templateUrl: './apprenant.component.html',
  styleUrls: ['./apprenant.component.css']
})
export class ApprenantComponent implements OnInit{
  public apprenants : ApprenantDto[] = [];
  constructor(private apprenantService : ApprenantService) {
  }

  ngOnInit(){
    this.apprenantService.getApprenants().subscribe((mesApprenants) => this.apprenants = mesApprenants);
  }
}
