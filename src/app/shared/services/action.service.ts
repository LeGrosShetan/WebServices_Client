import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActionDto} from "../models/action-dto";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http: HttpClient) { }

  getActions() : Observable<ActionDto[]>{
    return this.http.get<ActionDto[]>(environment.apiUrl+"/action/getActions");
  }

  getUneAction(numAction : number) : Observable<ActionDto>{
    return this.http.get<ActionDto>(environment.apiUrl+"/action/getUneAction/" + numAction.toString());
  }
}
