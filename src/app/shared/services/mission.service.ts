import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {MissionDto} from "../models/mission-dto";

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(private http: HttpClient) { }

  public getMissions() : Observable<MissionDto[]>{
    return this.http.get<MissionDto[]>(environment.apiUrl + "/mission/getMissions");
  }

  public getUneMission(missionId : number) : Observable<MissionDto>{
    return this.http.get<MissionDto>(environment.apiUrl + "/mission/getUneMission/" + missionId.toString())
  }
}
