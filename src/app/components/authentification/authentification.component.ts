import {booleanAttribute, Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormControl} from "@angular/forms";
import {Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {UtilisateurDto} from "../../shared/models/utilisateur-dto";
import {AuthentificationService} from "../../shared/services/authentification.service";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  motPasseIncorrect : Boolean = false
  connectionTry = false

  constructor(private formBuilder: FormBuilder,
              private authentificationService: AuthentificationService) {
  }

  profileForm = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  public envoie(): void {
    let login = this.profileForm.controls.login
    if (this.profileForm.controls.login != null && this.profileForm.controls.password != null){
      let utilisateur : UtilisateurDto = {
        nomUtil : this.profileForm.controls.login.value,
        motPasse : this.profileForm.controls.password.value
      }
      this.authentificationService.login(utilisateur).subscribe((utilisateur)=>{
        if(utilisateur.numUtil == -1){
          this.motPasseIncorrect = true;
        }else {
          this.authentificationService.connected = true;
        }
        this.connectionTry = true
      })
    }

  }

}
