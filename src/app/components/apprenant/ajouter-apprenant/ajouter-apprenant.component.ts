import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApprenantService} from "../../../shared/services/apprenant.service";
import {UtilisateurDto} from "../../../shared/models/utilisateur-dto";
import {ApprenantDto} from "../../../shared/models/apprenant-dto";
import {JeuDto} from "../../../shared/models/jeu-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajouter-apprenant',
  templateUrl: './ajouter-apprenant.component.html',
  styleUrls: ['./ajouter-apprenant.component.css']
})
export class AjouterApprenantComponent {

  constructor(private formBuilder: FormBuilder,
              private apprenantService: ApprenantService,
              private router : Router) {
  }

  apprenantForm = this.formBuilder.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
  });

  public ajouterApprenant(): void {
    if (this.apprenantForm.controls.nom != null && this.apprenantForm.controls.prenom != null){
      let apprenant : ApprenantDto = {
        numApprenant : null,
        nomApprenant : this.apprenantForm.controls.nom.value!,
        prenomApprenant : this.apprenantForm.controls.prenom.value!,
        inscriptions : [],
      }
      this.apprenantService.addApprenant(apprenant).subscribe(()=>{
        this.router.navigate(['/home'])
      })
    }
  }
}
