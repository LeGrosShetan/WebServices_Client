import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActionDto} from "../models/action-dto";
import {environment} from "../../../environments/environment";
import {ApprenantDto} from "../models/apprenant-dto";

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  constructor(private http: HttpClient) { }

  getApprenants() : Observable<ApprenantDto[]>{
    return this.http.get<ApprenantDto[]>(environment.apiUrl+"/apprenant/getApprenants");
  }

  getUnApprenant(numApprenant : number) : Observable<ApprenantDto>{
    return this.http.get<ApprenantDto>(environment.apiUrl+"/apprenant/getUnApprenant/" + numApprenant.toString());
  }

  addApprenant(apprenant : ApprenantDto) : Observable<ApprenantDto>{
    return this.http.post<ApprenantDto>(environment.apiUrl+"/apprenant/saveApprenant",apprenant);
  }

  deleteApprenant(numApprenant : number) : Observable<ApprenantDto>{
    return this.http.delete<ApprenantDto>(environment.apiUrl+"/apprenant/deleteApprenant/" + numApprenant.toString());
  }
}
