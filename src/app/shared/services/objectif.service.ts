import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ObjectifDto} from "../models/objectif-dto";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {

  constructor(private http: HttpClient) { }

  public getObjectifs() : Observable<ObjectifDto[]>{
    return this.http.get<ObjectifDto[]>(environment.apiUrl + "/objectif/getObjectifs")
  }

  public getObjectifsByMissionId(missionId : number) : Observable<ObjectifDto[]>{
    return this.http.get<ObjectifDto[]>(environment.apiUrl + "/objectif/getObjectifs/" + missionId.toString())
  }

  public getUnObjectif(objectifId : number) : Observable<ObjectifDto>{
    return this.http.get<ObjectifDto>(environment.apiUrl + "/objectif/getUnObjectif/" + objectifId.toString())
  }
}
