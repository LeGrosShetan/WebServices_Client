import {Component, OnInit} from '@angular/core';
import {JeuService} from "../../shared/services/jeu.service";
import {JeuDto} from "../../shared/models/jeu-dto";

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit{
  public jeux : JeuDto[] = [];

  constructor(private jeuService : JeuService) {
  }

  ngOnInit() {
    this.jeuService.getJeux().subscribe((mesJeux:JeuDto[]) => {
      this.jeux = mesJeux
    })
  }
}
