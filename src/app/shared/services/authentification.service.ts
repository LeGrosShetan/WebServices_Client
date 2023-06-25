import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {UtilisateurDto} from "../models/utilisateur-dto";
import {AppUser} from "../models/appUser";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  public connected : boolean
  public utilisateur : UtilisateurDto | undefined
  constructor(private http: HttpClient) {
    this.connected = false;
    this.utilisateur = undefined;
  }

  login(utilisateur : UtilisateurDto) : Observable<AppUser>{
    return this.http.post<AppUser>(environment.apiUrl+"/authentification/login",utilisateur);
  }
}
