import {Component, OnInit} from '@angular/core';
import {ActionService} from "../../shared/services/action.service";
import {ActionDto} from "../../shared/models/action-dto";

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit{
  public actions : ActionDto[] = [];

  constructor(private actionService: ActionService) {
  }

  ngOnInit() {
    this.actionService.getActions().subscribe((mesActions) => {
      this.actions = mesActions
    })
  }
}
