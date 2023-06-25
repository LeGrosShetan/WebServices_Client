import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JeuDto} from "../models/jeu-dto";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JeuService {

  constructor(private http: HttpClient) { }

  public getJeux() : Observable<JeuDto[]>{
    return this.http.get<JeuDto[]>(environment.apiUrl + "/action/getActions");
  }

  public getJeuxByApprenant(apprenantId : number) : Observable<JeuDto[]>{
    return this.http.get<JeuDto[]>(environment.apiUrl + "/jeu/getJeux/" + apprenantId.toString())
  }

  public getUnJeu(jeuId : number) : Observable<JeuDto>{
    return this.http.get<JeuDto>(environment.apiUrl + "/jeu/getUnJeu/" + jeuId.toString())
  }
}
